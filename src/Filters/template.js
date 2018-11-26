import React from 'react';
import { Dropdown } from "semantic-ui-react";
import {brands, sortingCriteria } from './constants'

const  Filters = ({
  filterBrand,
  sortFetchedProductstBy,
})  => {
  return (
    <div>
      <div>
        Filters:
        <div>
          Brand:
           <Dropdown placeholder='Select' multiple selection options={brands} onChange={filterBrand} />
        </div>

      </div>
      <div>
        Select sorting:
        <Dropdown placeholder='Select' selection options={sortingCriteria} onChange={sortFetchedProductstBy} />
      </div>
    </div>
  );
}

export default Filters;
