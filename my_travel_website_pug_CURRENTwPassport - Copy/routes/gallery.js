var express = require('express');
var router = express.Router();

router.get("/", (req, res) => {
  res.render("gallery");
})

/* GET users listing. */
// router.get('/', function (req, res, next) {
//   res.render('gallery');
// });

module.exports = router;
