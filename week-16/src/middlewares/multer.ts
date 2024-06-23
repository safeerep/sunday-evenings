import multer from 'multer'
import path from 'path'

// handling file uploads
const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, './src/public/uploads/'); 
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); 
  },
});

export default multer({ storage });