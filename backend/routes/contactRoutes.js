const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// GET all contacts
router.get("/", async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
});

// ADD contact
router.post("/", async (req, res) => {
  const contact = new Contact(req.body);
  const saved = await contact.save();
  res.json(saved);
});

// DELETE contact
router.delete("/:id", async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;
