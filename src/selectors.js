export const getVisibleProducts = (state) => {
  const { brands, types, sorting, productList } = state.products;

  return productList
    .filter(product => {
      return !brands.length ? true : brands.includes(product.brand)
    })
    .filter(product => {
      return !types.length ? true : types.includes(product.type)
    })
    .sort((a, b) => {
      let sorted ;
      if (sorting === 'Ascending') {
        sorted = a.price - b.price;
      }
      if (sorting === 'Descending') {
        sorted = b.price - a.price;
      }
      return sorted
    });
};
