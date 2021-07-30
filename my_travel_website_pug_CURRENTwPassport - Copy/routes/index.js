var express = require('express');
var router = express.Router();
var rg = require('random-greetings');

// const mongo = require("mongodb").MongoClient;
// const url = "mongodb://localhost:27017";





/* GET home page. */
router.get('/', function (req, res, next) {
  // details.find((err, contacts) => {
  //   if (err) throw err;
  //   console.log(contacts)
  // })
  res.render('index', {
    // title: 'Express',
    // greeting: rg.greet()
  });

});

module.exports = router;
