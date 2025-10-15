const {Router} = require("express");

const router = Router();

router.get("/signin" , (req , res) => {
  return res.render("signin");
});

router.get("/signup" , (req , res) => {
  return res.render("signup");
});

router.get("/user_login" , (req , res) => {
  return res.render("user_login");
});

router.get("/therap_login" , (req , res) => {
  return res.render("therap_login");
});

router.get("/therapPage" , (req , res) => {
  return res.render("therapPage");
});

router.get("/userPage" , (req , res) => {
  return res.render("userPage");
});

router.get("/journal" , (req , res) => {
  return res.render("journal");
});

router.get("/mood" , (req , res) => {
  return res.render("mood");
});

router.get("/active" , (req , res) => {
  return res.render("active");
});

router.get("/schedule" , (req , res) => {
  return res.render("schedule");
});

router.get("/billing" , (req , res) => {
  return res.render("billing");
});

router.get("/aichat" , (req , res) => {
  return res.render("aichat");
});

router.get("/note" , (req , res) => {
  return res.render("note");
});

router.get("/professional" , (req , res) => {
  return res.render("professional");
});

router.get("/peer" , (req , res) => {
  return res.render("peer");
});

router.get("/emergency" , (req , res) => {
  return res.render("emergency");
});

router.get("/wellness" , (req , res) => {
  return res.render("wellness");
});

module.exports = router ;