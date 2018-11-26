import products from "./products";

const apiHelper = {
  fetchProducts: () => {
    const response = {
      data: products
    };
    
    return Promise.resolve(response);
  }
};

export default apiHelper;
