const Property = require('../models/property');
const { validationResult } = require('express-validator');

exports.createProperty = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { ref } = req.body;

  try {
    const property = await Property.findOne({ ref });

    if (property) {
      return res.status(400).json({ msg: 'This reference already exists' });
    }

    const newProperty = new Property(req.body);

    await newProperty.save();
    res.json(newProperty);
  } catch (error) {
    console.log(error);
    res.status(400).send('There was an error');
  }
};

exports.getProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.json({ properties });
  } catch (error) {
    console.log(error);
    res.status(400).send('There was an error');
  }
};

exports.updateProperty = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const newProperty = req.body;

  try {
    let property = await Property.findById(req.params.id);

    if (!property) {
      return res.status(404).json({ msg: `Property not found` });
    }
    property = await Property.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: newProperty },
      { new: true }
    );

    res.json({ property });
  } catch (error) {
    console.log(error);
    res.status(500).send('There was an error');
  }
};

exports.deleteProperty = async (req, res) => {
  try {
    let property = await Property.findById(req.params.id);

    if (!property) {
      return res.status(404).json({ msg: 'Property not found' });
    }

    await Property.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: 'Property deleted' });
  } catch (error) {
    console.log(error);
    res.status(500).send('There was an error');
  }
};
