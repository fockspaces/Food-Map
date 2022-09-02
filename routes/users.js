const express = require("express");
const router = express.Router();
const catchAsnyc = require("../utils/catchAsync");
const users = require("../controllers/users");
const User = require("../models/user");
const passport = require("passport");
const { preUrl } = require("../middleware");

router
  .route("/register")
  .get(users.renderRegister)
  .post(catchAsnyc(users.register));

router
  .route("/login")
  .get(users.renderLogin)
  .post(
    passport.authenticate("local", {
      failureFlash: true,
      failureRedirect: "/login",
      keepSessionInfo: true,
    }),
    users.login
  );

router.get("/logout", users.logout);

module.exports = router;
