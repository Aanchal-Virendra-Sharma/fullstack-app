const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/api/message", (req, res) => {
  res.json({
    message: "Backend is working successfully on AWS!"
  });
});

app.use(express.static(path.join(__dirname, "../dist")));

app.get("/{*path}", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Application running on port ${PORT}`);
});