import { connect } from 'react-redux';
import template from './template';
import {
  sortFetchedProductstBy,
  filterBrand,
  filterType
} from "../actions/productsAction";
import { bindActionCreators } from "redux";


function getFilters(filter, productList) {
  const newArray = [];
    productList.forEach(function (a) {
    if (!this[a[filter]]) {
      this[a[filter]] = { text: a[filter], value: a[filter]};
      newArray.push(this[a[filter]]);
    }
  }, {});

  return newArray
}


const  mapStateToProps = (state, props) => {
  const { sorting, productList } = state.products;

  return {
    types: getFilters("type", productList),
    brands: getFilters("brand", productList),
    sorting,
  };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      sortFetchedProductstBy: sortFetchedProductstBy,
      filterBrand: filterBrand,
      filterType: filterType
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(template);
