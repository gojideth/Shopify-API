const { prisma } = require("../database/database");

const getAllProducts = async () => {
  const products = await prisma.product.findMany();
  return products;
};

const getProductById = async (id) => {
  const idProduct = Number(id);
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
  const idShop = Number(id);
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
  };
};

const createShoppingCart = async (quantity, productId) => {
  const idProduct = Number(productId);
  const product = await prisma.product.findFirst({
    where: {
      id: productId,
    },
  });
  try {
    if (quantity >= 0 && product.quantity >= quantity) {
      const shoppingCart = await prisma.shoppingCart.create({
        data: {
          quantity: Number(quantity),
          product: {
            connect: {
              id: idProduct,
            },
          },
        },
      });
      await prisma.product.update({
        where: {
          id: productId,
        },
        data: {
          quantity: product.quantity - quantity,
        },
      });
      return shoppingCart;
    }
  } catch (error) {
    console.error(error.message + "xd");
  }
  return {
    status: "error",
    message: "The product does not exist or the quantity is not valid",
  };
};

const createCoupon = async (couponCode, discount) => {
  if (!couponCode || !discount) {
    return {
      status: "error",
      message: "couponCode and discount are required",
    };
  } else {
    try {
      const coupon = await prisma.coupon.create({
        data: {
          code: couponCode,
          discount: discount,
        },
      });
      return coupon;
    } catch (error) {
      console.error(error.message);
    }
  }
};

const proceedToCheckout = async (shoppingCartId, userName, coupon) => {
  const shoppingCart = await prisma.shoppingCart.findFirst({
    where: {
      id: shoppingCartId,
    },
  });
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  getProductByName,
  getShopById,
  createShoppingCart,
  createCoupon,
};
