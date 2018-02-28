const express = require("express"); // Common js modules
const app = express();

// root route handler
app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

// Dynamically binds the port based on the underlying environment
const PORT = process.env.PORT || 5000; // boolean
app.listen(PORT);
