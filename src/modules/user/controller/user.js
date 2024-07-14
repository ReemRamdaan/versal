import userModel from "../../../../DB/model/User.model.js"


//get user
export const getUserModule = async (req, res, next) => {
    const customers = await userModel.find().select('_id userName')
    return res.json({ message: "Done", customers })
}
// GET USER PROFILE
export const profile = async (req, res, next) => {
    try {
        //console.log(req.user);
        const user = await userModel.findById(req.user._id);
        return res.json({ message: "Done", user });    
    } catch (error) {
        return res.json({ message: "Catch error", error })
    }
}
// DELETE USER   
export const deleteUser = async (req, res, next) => {
    try { 
       // const user = await userModel.findByIdAndDelete(req.user._id);
        return  res.json({ message: "Done", });
    } catch (error) {
        return res.json({ message: "Catch error", error });
    }
}
//UPDATE USER
export const updateUser = async (req, res, next) => {
    try {
        const { age, confirmEmail, gender } = req.body;
        const user = await userModel.findByIdAndUpdate(req.user._id, req.body, { new: true });
        return  res.json({ message: "Done", user });
    } catch (error) {
        return res.json({ message: "Catch error", error });
    }
}


