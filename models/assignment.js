// import mongoose and multer and assigning the path
const mongoose = require('mongoose');
const multer = require('multer');

const path = require('path');
const ASSIGN_PATH = path.join('/students/submissions');


// creating schema
const assignmentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    students: [
      {
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
        },
        status: {
          type: String,
          default: 'Pending',
        },
        upload: {
          type: String,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

let file = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '..', ASSIGN_PATH));
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now());
  },
});

// static
assignmentSchema.statics.uploadedAssignment = multer({
  file: file,
}).single('upload');
assignmentSchema.statics.assignPath = ASSIGN_PATH;

// creating model from schema
const Assignment = mongoose.model('Assignment', assignmentSchema);

// export the model
module.exports = Assignment;
