import { shallow } from "enzyme";
import ListComponent from "../List/ListComponent";
import mockProducts from "../__mocks__/productstMocks";
import React from "react";

const props = {
  productList: mockProducts
};

describe("ListComponent", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<ListComponent productList={mockProducts} />);
    expect(wrapper.find("Image").at(0).props().src).toEqual(mockProducts[0].image);
    expect(wrapper.find("Rating").at(0).props().defaultRating).toEqual(3)
    expect(wrapper.find(".productPrice").at(0).props().children).toEqual([" ", "ab", " ", "€ 138.95", " ", "/ ", "30ML"])
  });
});
