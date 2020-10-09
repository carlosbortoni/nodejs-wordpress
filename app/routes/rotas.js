var express = require('express');
var processo = require('../controllers/processo.js')

var router = express.Router();

router.use(function timeLog(req, res, next) {
    next();
});

router.get('/ping', processo.Ping);
router.get('/posts', processo.PostAll);
router.post('/sendpost', processo.SendPost);
router.post('/editpost/:id', processo.EditPost);

router.get('/cpt/:custom', processo.getCPT);

module.exports = router;
