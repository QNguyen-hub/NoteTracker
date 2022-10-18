const { Router } = require("express");
// const express = require("express");
const router = Router();

const notePath = require("./notes");

router.use("/notes", notePath);

module.exports = router;
