import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    category: {
      type: String,
      enum: ['personal', 'home', 'business'],
      default: 'personal',
      required: true
    },
    description: {
      type: String,
      maxlength: 200 
    },
    isCompleted: {
      type: Boolean,
      default: false
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  }, {timestamps: true});

const Todo = mongoose.model('Todo', todoSchema);
export default Todo;
