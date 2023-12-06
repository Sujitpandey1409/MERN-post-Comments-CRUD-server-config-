const router = require('express').Router()
const postController = require('../contollers/postController');

router.get('/data', postController.dataGet)
router.post('/data', postController.dataPush)
router.put('/data', postController.dataPut)
router.delete('/data/:id', postController.dataDelete)

module.exports = router