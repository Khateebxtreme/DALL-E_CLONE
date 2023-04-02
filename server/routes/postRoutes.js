import Express from "express";
import * as dotenv from 'dotenv';
import {v2 as cloudinary} from 'cloudinary';

import Post from '../mongodb/models/post.js';

dotenv.config();

const router = Express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

//get routes for our uploaded images
router.route('/').get(async(req,res)=>{
  try
  {
    const posts = await Post.find({});

    res.status(200).json({success:true , data : posts});
  }
  catch(error)
  {
    res.status(500).json({success:false , message : error});
  }
})

//post routes for our uploaded images
router.route('/').post(async(req,res)=>{
  try 
  {
  //data sent from the frontend
  const {name,prompt,photo} = req.body;

  //uploading it to cloudinary
  const photoUrl = await cloudinary.uploader.upload(photo);

  //creating an entry of our posted image to cloudinary on our mongoDB where we hold the media's url to access it
  const newPost = await Post.create({
    name,
    prompt,
    photo:photoUrl.url
  })

  res.status(201).json({success:true , data:newPost});
  } 
  catch (error)
  {
    res.status(500).json({success:false , message : error})
  }
})

export default router;
//used for creating and retreiving the posts