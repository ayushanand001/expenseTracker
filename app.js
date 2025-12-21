import express from "express";
import bodyParser from "body-parser";
import passport from "passport";
import initializePassport from "./passport-config.js";
import path from "path";
import { fileURLToPath } from "url";
import session, { Cookie } from "express-session";
import expenseRoutes from "./routes/expenses.js";
import authRoutes from "./routes/auth.js";
import env from "dotenv";
env.config();

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 24 * 60 * 60 * 1000 },
  })
);

app.use(passport.initialize());
app.use(passport.session());
initializePassport(passport);

app.use(expenseRoutes);
app.use(authRoutes);

const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});
