const multer = require('multer');
const multerStorage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, "public");
    },
    filename: (req, file, cb)=>{
        req.filename = new Date().toISOString().replace(/:/g, '-').replace('.','-') + file.originalname;
        cb(null, req.filename)
    }
})

const upload = multer({storage:multerStorage});

module.exports = upload;