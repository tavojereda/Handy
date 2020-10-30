import React from "react";
import "../styles/styles.scss";
const HeaderModal = () => {
  return <div>Some Text</div>;
};

const Purchases = props => {
  return <div className="header">purchases</div>;
};

Purchases.defaultProps = {
  title: "Handy",
  subtitle: "at hand"
};

export default Purchases;
