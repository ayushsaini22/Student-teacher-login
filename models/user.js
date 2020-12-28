// import mongoose
const mongoose = require('mongoose');

// creating the user schema for signup
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: ['teacher', 'student'],
    },

    assignment: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Assignment',
      },
    ],
  },
  {
    timestamps: true,
  }
);
// creating model from schema
const User = mongoose.model('User', userSchema);

// export the model
module.exports = User;
