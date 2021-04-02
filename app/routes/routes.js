var express = require('express')
const router = express.Router();
expressValidator = require('express-validator')
var userController =require('../controller/controller')
router.use(expressValidator())

router.post('/',userController.addUser);
router.post('/tag',userController.createTag);
router.get('/',userController.findRelation);

module.exports = router