import { Image, Grid, Segment,Rating } from "semantic-ui-react";
import PropTypes from "prop-types";
import React from "react";

const ListComponent = props => {
  const { productList } = props;

  return (
    <Grid textAlign='center' columns={5}>
      <Grid.Row>
      {productList &&
        productList.map((productItem, index) => {
          return (
            <Grid.Column mobile={16} tablet={8} computer={4} key={productItem.id}>
              <Segment>
                  <Image src={productItem.image}/>
                  {productItem.brand}
                 <div> ab {(productItem.price/100).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })} / {productItem.size}</div>
                 <Rating icon='star' defaultRating={productItem.rating/20} maxRating={5} />
              </Segment>
            </Grid.Column>
          );
        })}
      </Grid.Row>
      </Grid>
  );
};

ListComponent.propTypes ={
  productList: PropTypes.array
}

export default ListComponent;
