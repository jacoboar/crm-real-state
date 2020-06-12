const express = require('express');
const router = express.Router();
const ownerController = require('../controllers/ownerController');
const auth = require('../middleware/auth');

router.post('/', auth, ownerController.createOwner);
router.get('/', auth, ownerController.getOwners);
router.put('/:id', auth, ownerController.updateOwner);
router.delete('/:id', auth, ownerController.deleteOwner);

module.exports = router;
