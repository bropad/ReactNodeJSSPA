let path = require('path');
let router = require('express').Router({ mergeParams: true });

let Test = require('../mongoDb/models');

router.get('/routeAdmin', (req, res) => {

    console.log("get call");
    Test.find({}, (err, test) => {
        if (err) {
            res.send(err);
        }
        res.send(test);
    })
    console.log("end get");
});

router.post('/routeAdmin', (req, res) => {
    console.log("post call");

    let newTest = new Test();
    newTest.name = req.body.value;
    console.log("on cherche", req.body);
    newTest.save(function (err) {
        if (err) {
            res.send(err);
        }
        res.send({ message: 'TestR' });
    })
});

router.delete('/routeAdmin', (req, res) => {
    console.log("delete", req.body);
    Test.findByIdAndRemove(req.body.id, (err, todo) => {
        let message = {
            message: "Supprr success",
            id: todo.id
        };
        res.send(message);
    });
});

module.exports = router;