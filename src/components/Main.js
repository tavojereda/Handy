import React from "react";
import "../styles/styles.scss";

const Mainmod = () => {
  return <div>Some Text</div>;
};

const Main = props => {
  return (
    <div className="main">
      <div className="container">
        <h1 className="header__title">{props.title}</h1>
        {props.subtitle && (
          <h2 className="header__subtitle">{props.subtitle}</h2>
        )}
      </div>
    </div>
  );
};

Main.defaultProps = {
  title: "Main",
  subtitle: "body"
};

export default Main;
