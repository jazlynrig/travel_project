var express = require('express');
var router = express.Router();
// const logins = require('../models//loginmdl').logins


// router.post('/', function (req, res, next) {
//     var login = new logins()
//     login.username = req.body.username;
//     login.password = req.body.password;
//     login.save(err => {
//         // if(err) throw err;
//         if (err) {
//             const errorArray = [];
//             const errorKeys = Object.keys(err.errors);
//             errorKeys.forEach(key => errorArray.push(err.errors[key].message));
//             return res.render("login", {
//                 errors: errorArray
//             });
//         }
//         req.session.username = req.body.username;
//         res.redirect("/login/thankyoureg");
//     });
// });

// router.get("/thankyoureg", (req, res) => {
//     const fname = req.session.username;
//     req.session.username = null;
//     res.render("thankyoureg", { fname });
// })


router.get("/", (req, res) => {
    res.render("login");
})

/* GET users listing. */
// router.get('/', function (req, res, next) {
//     res.render('login');
// });

module.exports = router;