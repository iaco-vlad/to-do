const express = require('express');
const itemsController = require('./items.controller');
const router = express.Router();

router.get('/get-selected-item', itemsController.getSelectedItem);
router.post('/select', itemsController.selectItem);
router.get('/', itemsController.getAllItems);
router.get('/:id', itemsController.getItem);
router.post('/', itemsController.createItem);
router.put('/:id', itemsController.updateItem);
router.delete('/:id', itemsController.removeItem);

module.exports = router;
