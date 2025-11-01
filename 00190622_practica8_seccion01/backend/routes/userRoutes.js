import express from 'express';
import verifyToken from '../middlewares/userVerification.js';
import userController from '../controllers/controllers.js';

const router = express.Router();

router.get("/protected", verifyToken, (req, res) => {
  res.status(200).json({ message: "Protected data accessed", user: req.user });
});
router.post("/signin", userController.signIn)
router.get('/users', userController.getUsers)
router.get('/users/:id', userController.getUserById)
router.post('/users', userController.createUser)
router.put('/users/:id', userController.updateUser)
router.delete('/users/:id', userController.deleteUser)


export default router;