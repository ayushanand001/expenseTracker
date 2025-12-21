import { Strategy } from "passport-local";
import bcrypt from "bcryptjs";
import db from "./db.js";

export default function (passport) {
  passport.use(
    new Strategy({ usernameField: "email" }, async function verify(
      email,
      password,
      cb
    ) {
      try {
        const res = await db.query("SELECT * FROM users WHERE email=$1", [
          email,
        ]);
        const user = res.rows[0];

        if (res.rows.length > 0) {
          const storedpass = user.password;
          bcrypt.compare(password, storedpass, (err, valid) => {
            if (err) {
              //Error with password check
              console.error("Error comparing passwords:", err);
              return cb(err);
            } else {
              if (valid) return cb(null, user);
              else {
                return cb(null, false);
              }
            }
          });
        } else {
          cb(null, false);
        }
      } catch (err) {
        return cb(err);
      }
    })
  );

  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });
  passport.deserializeUser(async (id, cb) => {
    try {
      const res = await db.query("SELECT * FROM users WHERE id = $1", [id]);
      cb(null, res.rows[0]);
    } catch (err) {
      cb(err);
    }
  });
}
