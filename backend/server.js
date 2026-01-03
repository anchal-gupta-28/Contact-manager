const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/api/contacts", require("./routes/contactRoutes"));

// test route (important)
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// PORT (VERY IMPORTANT)
const PORT = process.env.PORT || 5000;

// MongoDB connect
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB error:", err);
  });
