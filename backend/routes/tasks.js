const express = require("express");
const authenticate = require("../middleware/authenticate");
const router = express.Router();

// This route is now protected by JWT
router.get("/", authenticate, async (req, res) => {
  const userId = req.user.id;
  // Fetch tasks belonging to this user
  res.json({ message: `Hello, user ${userId}! Here are your tasks.` });
});

module.exports = router;