const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  userId: { 
    type: String,   
    required: true,
    index: true
  },
  title: { 
    type: String, 
    required: true,
    trim: true
  },
  description: { 
    type: String,
    trim: true
  },
  dueDate: { 
    type: Date
  },
  status: {
    type: String,
    enum: ["pending", "in-progress", "completed", "archived"], // only these values
    default: "pending"
  },
}, {
  timestamps: true // Automatically adds createdAt and updatedAt
});

module.exports = mongoose.model("Task", taskSchema);