import passport from "passport";
import bcrypt from "bcryptjs";
import express from "express";
import db from "../db.js";

const router = express.Router();
const saltrounds = 10;

//get request to register page
router.get("/register", (req, res) => {
  res.render("register");
});

//get request to login page
router.get("/login", (req, res) => {
  res.render("login");
});

//registering user
router.post("/register", async (req, res) => {
  console.log(req.body);
  const email = req.body.email;
  const password = req.body.password;

  try {
    const checkout = await db.query("SELECT * FROM users WHERE email=$1", [
      email,
    ]);
    if (checkout.rows.length == 0) {
      const hash = await bcrypt.hash(password, saltrounds);
      await db.query("INSERT INTO users(email, password) VALUES($1, $2)", [
        email,
        hash,
      ]);
      res.redirect("/login");
    } else {
      console.log("user already exists");
      res.redirect("/login");
    }
  } catch (err) {
    console.log("error");
  }
});

//post login request
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
  })
);

//logout
router.get("/logout", (req, res, cb) => {
  req.logout((err) => {
    if (err) return cb(err);
    res.redirect("/login");
  });
});

export function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect("/login");
  }
}

export default router;
