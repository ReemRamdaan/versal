import transactionModel from "../../../../DB/model/Transaction.model.js";

// GET NOTES
export const getTransactionModule = async (req, res, next) => {
    const transactions = await transactionModel.find().select("_id customerId amount createdAt")
     
    
    return res.json({ message: "Transaction  module", transactions })
}
// ADD NOTE
export const addTransaction = async (req, res, next) => {
    try {
        const { amount } = req.body;
        const transaction = await transactionModel.create({ amount, customerId :req.user._id})
        return res.json({ message: "Done", transaction })
    } catch (error) {
        return res.json({ message: "catch error", error })
    }
}
// UPDATE NOTE
export const updateTransaction=async(req,res,next)=>{
    try {
     const {id}=req.params;
     const {amount}=req.body;
     const newNote= await transactionModel.findOneAndUpdate({$and:[{id,userID:req.user._id}]},{amount},{new:true});
      res.json({message:"Done",newNote});
    } catch (error) {
     return res.json({ message: `Catch Error ${error}`});
    }
 }    
 // DELETE NOTE
 export const deleteTransaction=async(req,res,next)=>{
     try {
       const {id}=req.params;
      const note= await transactionModel.findOneAndDelete({$and:[{id,userID:req.user._id}]});
       res.json({message:"Done",note})
     } catch (error) {
      return res.json({ message: `Catch Error ${error}`})
     }
  }   