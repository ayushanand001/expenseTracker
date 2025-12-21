import express from "express";
import db from "../db.js";
import { ensureAuthenticated } from "./auth.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.redirect("/dashboard");
});

//get request
router.get("/dashboard", ensureAuthenticated, async (req, res) => {
  try {
    const data = await db.query(
      "SELECT * FROM expenses WHERE user_id=$1 ORDER BY created_at DESC",
      [req.user.id]
    );

    const expenses = data.rows;
    let totalamount = 0;

    for (let i = 0; i < expenses.length; i++) {
      totalamount += parseFloat(expenses[i].amount);
    }

    res.render("dashboard.ejs", {
      expenses: expenses,
      totalSpent: totalamount,
      user: req.user,
    });
  } catch (err) {
    console.log(err);
  }
});

// add expense
router.post("/expenses/add", ensureAuthenticated, async (req, res) => {
  try {
    await db.query(
      "INSERT INTO expenses(description, amount, category, user_id) VALUES($1,$2,$3,$4)",
      [req.body.description, req.body.amount, req.body.category, req.user.id]
    );
    res.redirect("/dashboard");
  } catch (err) {
    console.log(err);
    res.redirect("/dashboard");
  }
});

export default router;
