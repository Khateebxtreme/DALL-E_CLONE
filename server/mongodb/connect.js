import mongoose from "mongoose";

const connectDB = (url) =>{
  mongoose.set('strictQuery',true);
  //helps in working with search functionality

  mongoose.connect(url)
  .then(()=> console.log("connected to mongoDB"))
  .catch((err)=>console.log(err));
}

export default connectDB;//import it inside index.js