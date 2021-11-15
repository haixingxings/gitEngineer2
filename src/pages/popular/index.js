import React from "react";
import Header from "./subpage/header";
import Content from "./subpage/Content";

export class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: "All",
    };
  }

  callBacks = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <Header callBacks={this.callBacks} />
        <Content currentIndex={this.state.currentIndex} />
      </div>
    );
  }
}
