# 💸 Wealth & Fitness Expense Tracker 💪

A **full-stack web application** designed for individuals managing a **high-performance lifestyle**.  
Track your **financial expenses alongside fitness goals**, ensuring essential costs like food, gym, and supplements are always accounted for.

---

## 🚀 Features

### 🔐 Secure Authentication
- Local authentication using **Passport.js**
- Password hashing with **bcryptjs**
- Persistent login sessions via **express-session**

### 📊 Expense Management
- Create and view categorized expenses:
  - Food 🍽️
  - Gym 🏋️
  - Supplements 💊
  - Others
- Data stored securely per user

### 📈 Dynamic Dashboard
- Real-time calculation of total spending
- Uses **Js Functions**
- Clean UI rendered with **EJS**

### 📱 Mobile Responsive
- Built with **Bootstrap 5**
- Optimized for mobile, tablet, and desktop

### ⚙️ Auto-Initializing Database
- Fail-safe startup script
- Automatically creates SQL tables on first run

---

## 🛠️ Tech Stack

### Backend
- **Node.js** (ES Modules)
- **Express.js**
- **PostgreSQL** (Hosted on Railway)

### Authentication
- **Passport.js** (Local Strategy)
- **bcryptjs**

### Frontend
- **EJS (Embedded JavaScript Templates)**
- **Bootstrap 5**

### Deployment
- **Render** – Web Service
- **Railway** – PostgreSQL Database

---

## 📁 Project Structure

```plaintext
├── routes/
│   ├── auth.js          # Registration, Login, Logout logic
│   └── expenses.js      # Dashboard & Expense CRUD operations
│
├── views/               # EJS Templates
│   ├── login.ejs        # Login UI with Bootstrap alerts
│   ├── register.ejs     # User registration UI
│   └── dashboard.ejs    # Main expense tracking interface
│
├── app.js               # Entry point & middleware configuration
├── db.js                # Database connection & table initialization
└── passport-config.js   # Passport strategy & serialization
```

---

## 🧪 Testing with Postman

The API and authentication flow were thoroughly tested using **Postman**:

- **Body Format**
  - Tested with `x-www-form-urlencoded`
  - Verified correct `req.body` parsing

- **Authentication Flow**
  - Session persistence verified
  - `req.isAuthenticated()` checks validated

- **JSON Validation**
  - `express.json()` enabled
  - Supports raw JSON payloads during development

---

## ⚙️ Environment Variables

Create a `.env` file or configure platform variables with the following:

```env
DATABASE_URL=your_postgresql_connection_string
SESSION_SECRET=your_random_session_secret
PORT=3000
```

| Variable Name     | Description |
|------------------|------------|
| `DATABASE_URL`   | PostgreSQL connection string |
| `SESSION_SECRET` | Secret used to sign session cookies |
| `PORT`           | Server port (defaults to 3000) |

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/expense-tracker.git
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file and add:
- `DATABASE_URL`
- `SESSION_SECRET`

### 4️⃣ Run the Application
```bash
npm start
```

The app will be available at:
```
http://localhost:3000
```

---

## ✅ Highlights
- Built using **only core full-stack technologies**
- Authentication + Sessions implemented correctly
- SQL-driven dashboard logic
- Clean MVC-like structure
- Ideal for **college projects**, **portfolio**, or **1-night builds**

---

## 📌 Future Enhancements
- Expense editing & deletion
- Monthly analytics & charts
- API-based expense imports
- Dark mode 🌙

---

## 🧑‍💻 Author
**Ayush Anand**  
Built with ❤️ for finance-focused developers

---

⭐ If you found this project useful, consider starring the repository!
