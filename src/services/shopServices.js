const Shop = require("../database/Shop");

const getAllProducts = async () => {
  const products = await Shop.getAllProducts();
  return products;
}

const getProductById = async (id) => {
  const product = await Shop.getProductById(id);
  return product;
}

const getProductByName = async (name) => {
  const product = await Shop.getProductByName(name);
  return product;
}

const getShopById = async (id) => {
  const shop = await Shop.getShopById(id);
  return shop;
}

const createProduct = async (name, price, description, quantity) => {
  const product = await Shop.createProduct(name, price, description, quantity);
  return product;
}

module.exports = {createProduct, getAllProducts, getProductById, getProductByName, getShopById};
