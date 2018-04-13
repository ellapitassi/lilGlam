const router = require('express').Router();
// const { Product, User } = require('../../db/models')
const model = require('../../db/models')
const Product = model.Product

module.exports = router;

// GET api/products
router.get('/', function (req, res, next) {
    Product.findAll()
      .then(products => res.json(products))
      .catch(next);
});

router.post('/add-product', function (req, res, next) {
    console.log("req.body", req.body)
    res.send(req.body)
});

