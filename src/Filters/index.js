import { connect } from 'react-redux';
import template from './template';
import {
  sortFetchedProductstBy,
  filterBrand
} from "../actions/productsAction";
import { bindActionCreators } from "redux";

const  mapStateToProps = (state, props) => {
  const { sorting } = state.products;
  return {
    sorting,
  };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      sortFetchedProductstBy: sortFetchedProductstBy,
      filterBrand: filterBrand
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(template);
