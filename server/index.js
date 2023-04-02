import Express from 'express';
import * as dotenv from 'dotenv';
import cors from "cors";

import connectDB from './mongodb/connect.js';
import dalleRoutes from './routes/dalleRoutes.js';
import PostRoutes from './routes/postRoutes.js'

dotenv.config();//for environment variables

const app = Express();
app.use(cors());
app.use(Express.json({limit:'50mb'}));

app.use('/api/v1/post',PostRoutes);
app.use('/api/v1/dalle',dalleRoutes);
//created api endpoints to be accessed from frontend

app.get('/',async(req,res)=>{
  res.send("Hello from DALL-E")
})

const startServer = async()=>{
  try {
    connectDB(process.env.MONGODB_URL)//URL for mongoDB atlas database
    //initially it is empty and need to be setup
    app.listen(8080,()=>{
      console.log("Server has started on port http://localhost:8080");
    })
  } catch (error) {
    console.log(error);
  }
  
}

startServer();