import multer from "multer";
import path from "path";

// 1. Set storage engine
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "uploads/"); // folder where files are stored
  },

  filename: function (req, file, callback) {
    const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1e9);

    const ext = path.extname(file.originalname);

    callback(null, uniqueName + ext);
  },
});

// 2. File filter (allow only images & files)
const fileFilter = (req, file, callback) => {
  const allowed = [
    "image/jpeg",
    "image/png",
    "image/jpg",
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];

  if (allowed.includes(file.mimetype)) {
    callback(null, true);
  } else {
    callback(new Error("Unsupported file type"), false);
  }
};

// 3. Initialize upload
const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB max
});

export default upload;
