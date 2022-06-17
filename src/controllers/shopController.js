const shopServices = require('../services/shopServices');

const getAllProducts = async (req,res)=>{
  const allProducts = shopServices.getAllProducts();
  res.send({status: 'success', data: JSON.stringify(allProducts)});
}

const getProductById = async (req,res)=>{
  const id = req.params.id;
  if(!id){
    res.send({status: 'error', message: 'id is required'});
  }  
  const product = shopServices.getProductById(id);
  res.send({status: 'success', data: await product});
}

const getProductByName = async (req,res)=>{
  const name = req.params.name;
  if(!name){
    res.send({status: 'error', message: 'name is required'});
  }
  const product = shopServices.getProductByName(name);
  res.send({status: 'success', data: await product});
}

const getShopById = async (req,res)=>{
  const id = req.params.id;
  if(!id){
    res.send({status: 'error', message: 'id is required'});
  }
  const shop = shopServices.getShopById(id);
  res.send({status: 'success', data: await shop});
}

const createProduct = async (req,res)=>{
  const name = req.body.name;
  const price = req.body.price;
  const description = req.body.description;
  const quantity = req.body.quantity;
  console.log(name, price, description, quantity);
  if(!name || !price || !description || !quantity){
    return res.status(400).send({status: 'error', message: 'name, price, description and quantity are required'});
  }
  const product = shopServices.createProduct(name, price, description, quantity);
  res.send({status: 'success', data: await product});
}

module.exports={getAllProducts, getProductById, getProductByName, getShopById, createProduct};