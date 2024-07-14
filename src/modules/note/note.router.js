import {Router} from 'express'
import auth from '../../middleware/auth.js';
import * as noteController from  './controller/note.js'
const router = Router();


router.get("/" , noteController.getTransactionModule);
router.post("/addtransaction" , auth,noteController.addTransaction);
router.put("/updatetransaction/:id",auth , noteController.updateTransaction);
router.delete("/deletetransaction/:id" ,auth, noteController.deleteTransaction);
export default  router
