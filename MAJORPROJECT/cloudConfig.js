const cloudinary = require('cloudinary').v2; // Import Cloudinary SDK
const { CloudinaryStorage } = require('multer-storage-cloudinary'); // Import Cloudinary storage for multer

// Configure Cloudinary with your credentials
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME, // Your Cloudinary cloud name
    api_key: process.env.CLOUD_API_KEY, // Your Cloudinary API key
    api_secret: process.env.CLOUD_API_SECRET // Your Cloudinary API secret
});

// Create a Cloudinary storage instance for multer
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'MAJORPROJECT_DEV', // Folder in Cloudinary where images will be stored
        allowed_formats: ['jpeg', 'png', 'jpg'] // Allowed image formats
    },
});

module.exports = {
    cloudinary,
    storage
};