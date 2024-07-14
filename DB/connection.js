import mongoose from 'mongoose';


const connectDB = async () => {
    return await mongoose.connect("mongodb+srv://reemramdaan:Reem5320@cluster0.hzvbele.mongodb.net/Route")
        .then(result => {
            console.log(`DB Connected successfully`)
        }).catch(err => console.log(`Fail to connect on DB  ,,,,,,,,,,,,,,,,,,,,,,,, ${err}`))
}


export default connectDB