### IMPORTANT NOTICE -> [ READ THIS ](#notes)

# DALL-E CLONE

**DALL-E CLONE** is an AI image generating web app that uses artificial intelligence to create images from scratch using a provided prompt. Users can interact with the app through a user-friendly interface to provide some required prompts to generate an image in accordance with their needs and **DALL-E CLONE** also gives users an optional choice to share their generated images with the community.

## Table of Contents
- [Features](#features)
- [TechStack](#techstack)
- [Screens](#screens)
- [Video Demo](#demo)
- [Authors](#authors)
- [License](#license)

## Features

- User friendly interface for better user experience.
- provided with a surprise me button to help users generate random prompts for testing
- Accessible through all kinds of devices (Tablets , desktop , phones etc).
- provides an option to download and share generated image.
- search functionality to filter out the images that are not desired.
- shared images are stored on cloud (using cloudinary API) for it to be Accessible indefinitely.
- images stored on cloud is accessed from the homepage to display them.


## TechStack

**Client:** React, TailwindCSS

**Server:** Node.js, Express, MongoDB, Mongoose

**Third Party Services:** DALL-E API, Cloudinary API, Vite

## Screens

### Homepage

![chrome_Wi6upgRCtf](https://user-images.githubusercontent.com/39136324/229374698-2873d468-9c38-4ce9-acf9-f6e27e7439cf.png)

### Image Creation page

![chrome_O0tOPMBPfm](https://user-images.githubusercontent.com/39136324/229374719-594c32c2-8893-45f9-b354-7daacfd13d83.png)

### Sample image created (Image creation page)

![chrome_oTpmsZtc1z](https://user-images.githubusercontent.com/39136324/229374971-5d736711-d670-4c7e-9a0f-292f3c62b1b8.png)


## Demo

**Video walkthrough on how to navigate and explore various features of this web app**


https://user-images.githubusercontent.com/39136324/229374250-0f311d9c-692f-41e1-8ad4-8bd2bc012bef.mp4




## Authors

- [@Khateebxtreme](https://github.com/Khateebxtreme)

## Notes

- **Temporary Unavailability of Certain Website Features :** As the API will be nearing it's expiry date, the image generation feature provided by DALL-E API will expire because of free trial exhaustion. If I want to bring the feature back for free, instructions are provided on how I will resolve this problem in this section. If someone wants to know how this project worked in the past, video demo is provided in the [ Demo ](#demo) section.
- **Hosting Services :** Netlify (Front-End), Render (Back-End)
- **DALL-E API key expiry :** June 1 2023 ![info](https://github.com/Khateebxtreme/DALL-E_CLONE/assets/39136324/af2227e9-f89a-436a-be22-6e648ea047ef)

- **On DALL-E API Key Expiry :** Generate a new API key with a new account and make changes to the environment variables in both .env file and render's environment variable settings.
- **TypeError_Failed to Fetch :** This error doesn't occur because of any problem in code but It is an ongoing issue with render based servers which hosts free services like this project ( personal note - usually redeploying the project on render manually works but It only helps to bypass this issue for a short while )
- **SyntaxError: Unexpected token 'B', "Billing ha"... is not valid JSON :** This error occurs because of API key's free trial exhaustion. To deal with this error, instructions are provided in this section. 

## License

[MIT](https://choosealicense.com/licenses/mit/)
