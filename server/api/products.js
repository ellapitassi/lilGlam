const router = require('express').Router();
const { Product, User } = require('../../db/models')

module.exports = router;

// GET api/products
router.get('/', function (req, res, next) {
    Product.findAll()
      .then(products => res.json(products))
      .catch(next);
});