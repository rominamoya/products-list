import {
  fetchProducts,
  sortFetchedProductstBy,
  filterBrand
} from "./actions/productsAction";
import { getVisibleProducts } from './selectors';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import ListComponent from "./List/ListComponent";
import Filters from "./Filters"
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount = () => {
    this.props.fetchProducts();
  };

  render() {
    return (
        <Grid celled="internally">
          <Grid.Row>
            <Grid.Column width={13}>
            <Filters />
              <ListComponent
                productList={this.props.productList}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
    );
  }
}

const  mapStateToProps = state => {

  return {
    productList: getVisibleProducts(state),
  };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchProducts: fetchProducts,
      sortFetchedProductstBy: sortFetchedProductstBy,
      filterBrand: filterBrand
    },
    dispatch
  );


export default connect(mapStateToProps, mapDispatchToProps)(App);
