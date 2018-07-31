var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
    var body = req.body;
    console.log("WANAP_SERVER "+body.toString());
    res.send('respond with a resource');
    // res.sendStatus(200);

});

module.exports = router;
