import Express from "express";
import * as dotenv from 'dotenv';
import {Configuration,OpenAIApi} from 'openai';

dotenv.config();

const router = Express.Router();

const configuration = new Configuration({
  apiKey :  process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration);
router.route('/').get((req,res)=>{
  res.send("Hello from DALL-E")
});

//We have to write a route that is going to make a call to openai dalle api and then based on a prompt an image would be returned

router.route('/').post(async(req,res)=>{
  try {
    const { prompt } = req.body;
    const aiResponse = await openai.createImage({
      prompt,
      n:1,
      size: '1024x1024',
      response_format:'b64_json'
    });

    const image = aiResponse.data.data[0].b64_json;//returned image

    res.status(200).json({photo:image})
  } catch (error) {
    console.log(error);
    res.status(500).send(error?.response.data.error.message)
  }
})
export default router;
//helps in generating image data  from the api 