import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

// Railway provides the DATABASE_URL automatically
const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Required for Railway/Render production connections
  },
});

// THIS IS THE FAIL-SAFE: This script runs every time the server starts
const initDb = async () => {
  try {
    await db.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
      );
      CREATE TABLE IF NOT EXISTS expenses (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id),
        description TEXT NOT NULL,
        amount DECIMAL(10,2) NOT NULL,
        category VARCHAR(50),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log("✅ Database tables confirmed/created");
  } catch (err) {
    console.error("❌ Database init failed:", err);
  }
};

initDb();

export default db;
