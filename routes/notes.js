const { Router } = require("express");
const fs = require("fs");
const express = require("express");
const router = Router();
const path = require("path");
const uuid = require("../helpers/uuid");

router.get("/", (req, res) =>
  fs.readFile("./db/db.json", (err, data) => {
    if (err) {
      console.log(err);
      res.err;
    } else {
      console.log(JSON.parse(data));
      res.json(JSON.parse(data));
    }
  })
);

// router.post("/", (req, res) => {
//   const { title, text, id: uuid(), } = req.body;
//   fs.read("./db/db.json", (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(JSON.parse(data));
//       fs.writeFile();
//     }
//   });
//   res.send("Notes Received");
// });
router.post("/", (req, res) => {
  const { title, text } = req.body;
  if (req.body) {
    const newNotes = { title, text, id: uuid() };
    const updateNote = JSON.stringify(newNotes);
    fs.writeFile("./db/db.json", updateNote, err);
    res.status(201).json("notes added");
  } else {
    res.status(500).json("unable to add notes");
  }
});

module.exports = router;
