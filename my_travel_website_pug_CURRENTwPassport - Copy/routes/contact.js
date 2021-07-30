var express = require('express');
var router = express.Router();
const contacts = require('../models/contactsmdl').details


router.post('/', function (req, res, next) {
    var contact = new contacts()
    contact.firstname = req.body.firstname;
    contact.lasttname = req.body.lasttname;
    contact.mail = req.body.mail;
    contact.comment = req.body.comment;
    contact.save(err => {
        // if(err) throw err;
        if (err) {
            const errorArray = [];
            const errorKeys = Object.keys(err.errors);
            errorKeys.forEach(key => errorArray.push(err.errors[key].message));
            return res.render("contact", {
                formdata: req.body,
                errors: errorArray
            });
        }
        req.session.fname = req.body.firstname;
        res.redirect("/contact/thankyou");
    });
});

router.get("/thankyou", (req, res) => {
    const fname = req.session.fname;
    req.session.fname = null;
    res.render("thankyou", { fname });
})

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('contact');
});

module.exports = router;