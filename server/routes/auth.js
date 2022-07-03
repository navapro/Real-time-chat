const {
  login,
  register,
  getAllUsers,
  setAvatar,
  logOut,
} = require("../controllers/userController");
// const { route } = require("./messages");

const router = require("express").Router();

router.post("/login", function (req, res) {
  login;
});
router.post("", register);
router.post("/register", function (req, res) {
  register;
});
router.post("/allusers/:id", function (req, res) {
  getAllUsers;
});
router.post("/setavatar/:id", function (req, res) {
  setAvatar;
});

router.post("/logout/:id", function (req, res) {
  logOut;
});

module.exports = router;
