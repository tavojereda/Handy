import React from "react";
import "../styles/styles.scss";
const HeaderModal = () => {
  return <div>Some Text</div>;
};

const Header = props => {
  return (
    <div className="header">
      <div className="container">
        <h1 className="header__title">{props.title}</h1>
        {props.subtitle && (
          <h2 className="header__subtitle">{props.subtitle}</h2>
        )}
      </div>
    </div>
  );
};

Header.defaultProps = {
  title: "Handy",
  subtitle: "at hand"
};

export default Header;
