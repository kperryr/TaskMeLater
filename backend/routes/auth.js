const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get("/google/callback", passport.authenticate("google", { session: false }), (req, res) => {
  const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
  res.cookie("jwt", token, { httpOnly: true, secure: false }); // set secure:true in prod
  res.redirect(`${process.env.CLIENT_URL}/dashboard`);
});

router.get("/logout", (req, res) => {
  res.clearCookie("jwt");
  res.send({ message: "Logged out" });
});


module.exports = router;