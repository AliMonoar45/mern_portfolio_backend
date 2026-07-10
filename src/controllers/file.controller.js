import File from '../models/file.model.js'

// file upload

const fileUpload = async (req,res) => {
    try {
        // get file path
        const filename = req.file.path;
        console.log('file name:- ', filename);
        // create file path
        const data = await File.create({ filename });
        // send response
        res.status(201).json({
          success: true,
          message: "File Uploads successfully",
          data,
        });
        
    } catch (error) {
        res.status(500).json({
          success: false,
          error: error.toString(),
          message: "Something went wrong.",
        });
    }
}

const fileControllers = { fileUpload };

export default fileControllers;