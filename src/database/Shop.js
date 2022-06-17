const { prisma } = require("../database/database");

const getAllProducts = async () => {
  const products = await prisma.product.findMany();
  return products;
};

const getProductById = async (id) => {
  const idProduct = Number (id);
  const product = await prisma.product.findFirst({
    where: {
      id: idProduct,
    },
  });
  return product;
};

const getProductByName = async (name) => {
  const product = await prisma.product.findMany({
    where: {
      name: name,
    },
  });
  return product;
};

const getShopById = async (id) => {
  const idShop = Number (id);
  const shop = await prisma.shop.findFirst({
    where: {
      id: idShop,
    },
  });
  return shop;
};

const createProduct = async (name, price, description, quantity) => {
  try {
    const product = await prisma.product.create({
      data: {
        name: name,
        price: price,
        description: description,
        quantity: quantity,
      },
    });
    return product;
  } catch (error) {
    console.error(error.message);
  }
  return {
    status: "error",
    message: "Something went wrong",
  }
};

const createShoppingCart = async (quantity, productId) => {
  try {
    const shoppingCart = await prisma.shoppingCart.create({
      data: {
        quantity: quantity,
        product: {
          connect: {
            id: productId,
          },
        },
      },
    });
    return shoppingCart;
  } catch (error) {
    console.error(error.message);
  }
  return {
    status: "error",
    message: "The product does not exist or the quantity is not valid",
  }
}

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  getProductByName,
  getShopById,
};
