import userModel from "../../../../DB/model/User.model.js";
import jwt from 'jsonwebtoken'
import { compare, hash } from "../../../utils/Hash&compare.js";

export const getAuthModule = (req, res, next) => {

    return res.json({ message: "Auth module" })
}

// SIGN UP
export const signup = async (req, res, next) => {
    try {
        const { email, userName, password, cPassword } = req.body;
        console.log({ email, userName, password });
        if (password != cPassword) {
            return res.json({ message: "confirmationPassword misMatch password" })
        }
        const checkUser = await userModel.findOne({ email })
        if (checkUser) {
            return res.json({ message: "Email Exist" })
        }
        const hashPassword = hash({ plaintext: password })
        const user = await userModel.create({ userName, email, password: hashPassword })
        return res.json({ message: "Done", user })
    } catch (error) {

        return res.json({ message: "Catch error", error })
    }
}
// LOGIN
export const login = async (req, res, next) => {
    try {
        const { emailOrUsername, password } = req.body;
        const user = await userModel.findOne({
            $or: [{ userName: emailOrUsername }, { email: emailOrUsername }],
        })
        if (!user) {
            return res.json({ message: "In-valid Email" })
        }
      //  console.log({ FE: password, DB: user.password });
        const match = compare({ plaintext: password, hashValue: user.password })
      //  console.log(match);
        if (!match) {
            return res.json({ message: "In-valid password" })
        }
        const token = jwt.sign({ id: user._id, isLoggedIn: true }, process.env.TOKEN_SIGNATURE, { expiresIn: 60*60 })
        return res.json({ message: "Done", token })
    } catch (error) {
        return res.json({ message: "Catch error", error })
    }
}