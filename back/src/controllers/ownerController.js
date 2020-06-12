const Owner = require('../models/owner');
const { validationResult } = require('express-validator');

exports.createOwner = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { vat } = req.body;

  try {
    const owner = await Owner.findOne({ vat });

    if (owner) {
      return res.status(400).json({ msg: 'This vat number already exists' });
    }

    const newOwner = new Owner(req.body);

    await newOwner.save();
    res.json(newOwner);
  } catch (error) {
    console.log(error);
    res.status(400).send('There was an error');
  }
}

exports.getOwners = async (req, res) => {
  try {
    const owners = await Owner.find();
    res.json({ owners });
  } catch (error) {
    console.log(error);
    res.status(400).send('There was an error');
  }
}

exports.updateOwner = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const newOwner = req.body;

  try {
    let owner = await Owner.findById(req.params.id);

    if (!owner) {
      return res.status(404).json({ msg: `Owner not found` });
    }
    owner = await Owner.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: newOwner },
      { new: true }
    );

    res.json({ owner });
  } catch (error) {
    console.log(error);
    res.status(500).send('There was an error');
  }
}

exports.deleteOwner = async (req, res) => {
  try {
    let owner = await Owner.findById(req.params.id);

    if (!owner) {
      return res.status(404).json({ msg: 'Owner not found' });
    }

    await Owner.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: 'Owner deleted' });
  } catch (error) {
    console.log(error);
    res.status(500).send('There was an error');
  }
}