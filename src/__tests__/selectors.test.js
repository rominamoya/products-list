import { getVisibleProducts } from "../selectors";
import mockProducts from "../__mocks__/productstMocks";

describe("Products selectors", () => {
  it("should display all products", () => {
    const state = { products: { productList: mockProducts, filters: [] } };
    expect(getVisibleProducts(state).length).toEqual(7);
  });

  it("should display filtered products", () => {
    const state = {
      products: {
        productList: mockProducts,
        sorting: "Descending",
        filters: ["Jean Paul Gaultier", "Hugo Boss"]
      }
    };
    expect(getVisibleProducts(state).length).toEqual(3);
    expect(getVisibleProducts(state)[0].price).toEqual(3895);
    expect(getVisibleProducts(state)[1].price).toEqual(3795);
    expect(getVisibleProducts(state)[2].price).toEqual(3395);
  });
});
