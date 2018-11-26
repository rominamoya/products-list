export const getVisibleProducts = (state) => {
  const { filters, sorting, productList } = state.products;
  return productList
    .filter(product => {
      return !filters.length ? true : filters.includes(product.brand)
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
