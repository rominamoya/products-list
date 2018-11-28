import { fetchProducts } from "./actions/productsAction";
import { getVisibleProducts } from "./selectors";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Grid, Container } from "semantic-ui-react";
import ListComponent from "./List/ListComponent";
import Filters from "./Filters";
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
      <Container>
        <Grid textAlign="center" stackable padded columns={4}>
          <Filters />
          <ListComponent productList={this.props.productList} />
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    productList: getVisibleProducts(state)
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchProducts: fetchProducts
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
