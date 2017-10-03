let path = require('path');
let router = require('express').Router({mergeParams: true});

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,
        '../../clientindex.html'));
});

router.get('/test', (req, res) => {
    res.send('hello world');
})

router.post('/addVideo', (req, res) => {
    res.send('ça marche');
})

module.exports = router;