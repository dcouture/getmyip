var express = require('express');
var router = express.Router();

// GET home page.
router.get('/', function(req, res) {

    // RegEx replace is used to remove ipv6 prefix Windows 7+ add to IP address
    res.render('index', {
        title: 'IP Cow',
        ip: req.ip.replace(/^.*:/, '')
    })
});

module.exports = router;