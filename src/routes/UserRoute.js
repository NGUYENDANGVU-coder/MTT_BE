const express = require("express");
const router = express.Router();
const userController = require("../controller/UserController");
const { authMiddleware, authUserMiddleWare } = require("../middleware/authMiddleware");

router.get('/getAll',authMiddleware, userController.getAllUser)
router.get('/get-details/:id', authUserMiddleWare, userController.getDetailsUser)
router.post('/refresh-token',userController.refreshToken)
router.post("/signup", userController.createUser);
router.post("/logout", userController.logoutUser);
router.post("/login", userController.loginUser);
router.delete("/delete/:id",authMiddleware,userController.deleteUser);
router.put("/update/:id",userController.updateUser);
module.exports = router;
