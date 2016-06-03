let router = require('express').Router();
let controller = require('./controller');
router.param('id',controller.param);

router.route('/')
.get(controller.get)
.post(controller.post)
.put(controller.updateOne);

router.route('/:id')
.get(controller.getOne)
.delete(controller.delete)

module.exports = router;