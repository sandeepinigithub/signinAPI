const express = require("express");
const router = express.Router();
var signinPost = require("../models/signin");

//SUBMIT A POST
router.post("/", async (req, res) => {
  const signin = new signinPost({
    username: req.body.username,
    password: req.body.password,
  });

  try {
    const savePost = await signin.save();
    res.json(savePost);
    console.log("received signin data");
  } catch(err) {
    res.json({ message: err });
  }
});


module.exports = router;