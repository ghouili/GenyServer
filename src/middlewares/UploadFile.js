const multer = require("multer"); // save our doc
const { v1: uuid } = require("uuid"); //generation code aleatoire

const MIME_TYPE_MAP = { // taatik type image MAP
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
};

const filepload = multer({ 
  limits: 500000, //limit mt3 size file max
  storage: multer.diskStorage({ // save fel src/uploads/images
    destination: (req, file, cb) => { //cb mean callback : i5dem w kaml tri9ek ma te9efch 
      cb(null, "src/uploads/images");
    },
    filename: (req, file, cb) => {
      const ext = MIME_TYPE_MAP[file.mimetype];
      cb(null, uuid() + "." + ext);
    },
  }),
  fileFilter: (req, file, cb) => {
    const isvalid = !!MIME_TYPE_MAP[file.mimetype];
    let error = isvalid ? null : new Error("Invalid type!");
    cb(error, isvalid);
  },
});

module.exports = filepload
