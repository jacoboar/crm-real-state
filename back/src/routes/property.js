const express = require('express');
const router = express.Router();
const propertyController = require('../controllers/propertyController');
const auth = require('../middleware/auth');

router.post('/', auth, propertyController.createProperty);
router.get('/', auth, propertyController.getProperties);
router.put('/:id', auth, propertyController.updateProperty);
router.delete('/:id', auth, propertyController.deleteProperty);

module.exports = router;
