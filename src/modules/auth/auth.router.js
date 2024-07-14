import {Router} from 'express'
import * as authController from  './controller/auth.js'
const router = Router();



router.post('/signup' , authController.signup)
router.post('/login' , authController.login)


router.get("/" , authController.getAuthModule)

export default  router