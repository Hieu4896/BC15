import React, { Component } from "react";
import Carousel from "./Carousel";
import Item from "./Item";

export default class Body extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <Item />
      </div>
    );
  }
}
