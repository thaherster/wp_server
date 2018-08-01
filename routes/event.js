var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
    const body = req.body;
    if(body.deviceToken)
    {res.send(`You sent: ${body.deviceToken} and ${body.event} to Express`);}
    else {
        res.send(`You sent:  ${body.event} to Express`);
    }

});

module.exports = router;
