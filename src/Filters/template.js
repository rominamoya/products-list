import React from "react";
import { Dropdown, Grid } from "semantic-ui-react";
import  sortingCriteria from "./constants";

const Filters = ({ brands, types, filterBrand, filterType,sortFetchedProductstBy }) => {
  return (
    <Grid.Row>
      <Grid.Column mobile={16} tablet={8} computer={4}>
        <Dropdown
          placeholder="Select"
          multiple
          selection
          options={brands}
          onChange={filterBrand}
        />
      </Grid.Column>
      <Grid.Column mobile={16} tablet={8} computer={4}>
        <Dropdown
          placeholder="Select"
          multiple
          selection
          options={types}
          onChange={filterType}
        />
      </Grid.Column>
      <Grid.Column mobile={16} tablet={8} computer={4}>
        <Dropdown
          text="Sort By"
          inline
          options={sortingCriteria}
          onChange={sortFetchedProductstBy}
        />
      </Grid.Column>
    </Grid.Row>
  );
};

export default Filters;
