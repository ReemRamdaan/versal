import userModel from "../../DB/model/User.model.js";
import { verifyToken } from "../utils/generate&VerifyToken.js";



const auth = async (req, res, next) => {
    try {
        const { authorization } = req.headers;
       // console.log({ authorization });
        if (!authorization) {
            return res.json({ message: "authorization is required" })
        }
        if (!authorization.startsWith("roma__")) {
            return res.json({ message: "IN_Valid Bearer Key" })
        }
        const token =authorization.split("roma__")[1];
        if(!token){
            return res.json({ message: "token is required" }) 
        }
        const decoded = verifyToken({token})
    //    console.log({ decoded });
        if (!decoded.id || !decoded.isLoggedIn) {
            return res.json({ message: "In-valid token payload" })
        }
        const authUser = await userModel.findById(decoded.id).select("userName email")
     //   console.log({ authUser });
        if (!authUser) {
            return res.json({ message: "Not register account" })
        }
        req.user = authUser
        return next()
    } catch (error) {
        return res.json({ message: "Catch error" , error  , err:error?.message})
    }
}
export default auth