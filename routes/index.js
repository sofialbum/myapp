var express = require("express");
var router = express.Router();
const helloWorldControler = require("../controlers/index");

/* GET home page. */
router.get("/holaMundo", function (req, res, next) {
  res.status(200).send(helloWorldControler.helloWorld());
});

router.post("/sumar", function (req, res, next) {
  try {
    const suma = helloWorldControler.sumar(req.body.num1, req.body.num2);
    res.status(200).json({ data: suma });
  } catch (err) {
    console.log('entre')
    next(err);
  }
});

module.exports = router;
