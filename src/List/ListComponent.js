import { Image, Grid, Rating } from "semantic-ui-react";
import PropTypes from "prop-types";
import React from "react";
import styles from "./ListComponent.module.scss";
const ListComponent = props => {
  const { productList } = props;

  return (
    <Grid.Row>
      {productList &&
        productList.map((productItem, index) => {
          return (
            <Grid.Column
              mobile={16}
              tablet={8}
              computer={4}
              stretched
              key={productItem.id}
            >
              <div className={styles.productSegment}>
                <Image centered src={productItem.image} />
                <div className={styles.productName}>{productItem.brand}</div>
                <div>{productItem.type}</div>
                <div className={styles.productPrice}>
                  {" "}
                  ab{" "}
                  {(productItem.price / 100).toLocaleString("de-DE", {
                    style: "currency",
                    currency: "EUR"
                  })}{" "}
                  / {productItem.size}
                </div>
                <Rating
                  disabled
                  defaultRating={Math.round(productItem.rating / 20)}
                  maxRating={5}
                />
              </div>
            </Grid.Column>
          );
        })}
    </Grid.Row>
  );
};

ListComponent.propTypes = {
  productList: PropTypes.array
};

export default ListComponent;
