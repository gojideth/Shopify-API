const express = require('express');
const router = express.Router();
const shopController = require('../../controllers/shopController');

router.get('/', shopController.getAllProducts);
router.get('/:id', shopController.getProductById);
router.get('/name/:name', shopController.getProductByName);
router.get('/shop/:id', shopController.getShopById);
router.post('/', shopController.createProduct);
router.post('/cart', shopController.createShoppingCart);
router.post('/coupon', shopController.createCoupon);
module.exports = router;