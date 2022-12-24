const { Schema, model, Types } = require('mongoose');
const validator = require('validator');

// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String, 
      trim: true,
      required: true,
      max_length: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate:{
        validator: validator.isEmail,
        message: `You have not entered a valid email address`,
        isAsync: false
      }
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `friendCount` that gets the number of the user's friends
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;
