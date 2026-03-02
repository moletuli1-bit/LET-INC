const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve frontend
app.use(express.static(path.join(__dirname, "../frontend")));

//THIS MUST COME BEFORE ANY catch-all routes
app.post("/submit", (req, res) => {
  console.log("✅ Form data received:");
  console.log(req.body);

  res.json({
    success: true,
    message: "Form submitted successfully!",
    data: req.body
  });
});

// Serve index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});