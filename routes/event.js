var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
    const body = req.body;
    if(body.deviceToken)
    {
        let message = {
            data: {
                data_type:"status",
                data_content: body.event,
            },
            token: body.deviceToken
        };


        admin.messaging().send(message )
            .then(function(response) {
                // See the MessagingDevicesResponse reference documentation for
                // the contents of response.
                console.log('Successfully sent message:', response);
                // res.send(`You sent: ${body.deviceToken} and ${body.datas} to Express`+response);
                res.sendStatus(200)
                // res.send("SUCCESS");

            })
            .catch(function(error) {
                console.log('Error sending message:', error);
                // res.send(`You sent: ${body.deviceToken} and ${body.datas} to Express`+error);
                res.sendStatus(404)
                // res.send("ERROR");

            });


    }
    else {
        res.send(`You sent:  ${body.datas} to Express`);
    }

});

module.exports = router;
