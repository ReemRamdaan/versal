import { Router } from 'express';
import auth from '../../middleware/auth.js';
import * as userController from './controller/user.js';
const router = Router();


router.get("/", userController.getUserModule);
router.get("/profile", auth, userController.profile);
router.delete("/deleteuser", auth, userController.deleteUser);
router.put("/updateuser", auth, userController.updateUser);

export default router;