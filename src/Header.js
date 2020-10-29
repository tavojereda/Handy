import React from "react";
import ReactDOM from "react-dom";

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Handy</h1>
        <p> This is a header</p>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return <div>Options here</div>;
  }
}

class AddOptions extends React.Component {
  render() {
    return <div>AddOptions component here</div>;
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What Should I do?</button>
      </div>
    );
  }
}
