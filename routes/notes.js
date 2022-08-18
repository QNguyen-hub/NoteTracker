const { Router } = require("express");
const fs = require("fs");

const router = Router();

router.get("/", (req, res) =>
  fs.readFile("./db/db.json", "tuf-8", (err, data) => {
    if (err) {
      console.log(err);
      res.err;
    } else {
      console.log(JSON.parse(data));
      res.json(JSON.parse(data));
    }
  })
);

router.post("/", (req, res) => {
  const { title, text } = req.body;
  fs.read("./db/db.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(JSON.parse(data));
      fs.writeFile();
    }
  });
  res.send("Notes Received");
});

module.exports = router;
