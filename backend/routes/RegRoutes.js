const express = require('express');
const app = express();
const router = express.Router();

const Reg = require('../models/Reg');



router.post("/add", (req, res) => {
console.log(req.body);

    const newReg = new Reg({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone
      });
    newReg.save()
      .then(Reg => {
      res.status(200).json({'Reg': 'Registered successfully'});
      })
      .catch(err => {
      res.status(400).send("unable to register");
      });
  });

module.exports = router;
