var router = require('express').Router();
module.exports = router;
var mongoose = require('mongoose');
var _ = require('lodash');
var Bathroom = mongoose.model('Bathroom');

//get all
router.get('/', (req, res, next) => {
  Bathroom.find()
    .then(bathrooms => res.send(bathrooms));
});
//get one
router.get('/:bathroomId', (req, res, next) => {
  res.send(req.bathroom);
});
//create new
router.post('/', (req, res, next) => {
  Bathroom.create(req.body.newBathroom)
    .then(newBRoom => {
      console.log(newBRoom);
      res.send(newBRoom);
    })
    .then(null, next);
});
//update exisiting
router.put('/:bathroomId', (req, res, next) => {
  _.assign(req.bathroom, req.body.updatedBathroom);

  req.bathroom.save()
    .then(updatedBathroom => {
      res.status(201).send(updatedBathroom);
    })
    .then(null, next);
});
//delete one
router.delete('/:bathroomId', (req, res, next) => {
  Bathroom.remove(req.bathroom).remove();
});

router.param('bathroomId', (req, res, next, bathroomId) => {
  Bathroom.findById(bathroomId)
    .then(bathroom => {
      req.bathroom = bathroom;
      next();
    })
    .then(null, next);
});
