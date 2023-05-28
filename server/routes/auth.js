const {
  login,
  register,
  getAllUsers,
  setAvatar,
  logOut,
  updateName,
  deleteAccount
} = require("../controllers/userController");

const router = require("express").Router();

router.post("/login", login);
router.post("/register", register);
router.get("/allusers/:id", getAllUsers);
router.post("/setavatar/:id", setAvatar);
router.get("/logout/:id", logOut);
router.put("/updateName/:id", updateName);
router.delete("/deleteAccount/:id", deleteAccount);
router.get("/account-deleted", (req, res) => {
  res.send("Your account has been deleted.");
});

module.exports = router;
