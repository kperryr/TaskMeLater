const express = require("express");
const mongoose = require("mongoose");
//must occur first
require("dotenv").config();
const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const taskRoutes = require("./routes/tasks");
require("./config/passport");



const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("MongoDB connection error:", err));

//middleware
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}));
app.use(express.json());

app.use(cookieSession({
  name: "session",
  keys: [process.env.JWT_SECRET],
  maxAge: 24 * 60 * 60 * 1000
}));

app.use(passport.initialize());
app.use(cookieParser());

// Routes
app.use("/auth", authRoutes);
app.use("/tasks", taskRoutes); 

// Start server
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});