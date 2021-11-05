import React, { Component } from "react";

export default class HandleEvent extends Component {
  handleClick = () => {
    alert("hello Myx");
  };

  handleClick1 = (ten) => {
    alert(`hello ! ${ten}`);
  };

  showmess = (mess) => {
    alert(mess);
  };
  render() {
    return (
      <div className="container">
        <div>Handle Event</div>
        <button className="btn btn-danger" onClick={this.handleClick}>
          Click me
        </button>

        <br />
        <button
          className="btn btn-warning"
          onClick={() => {
            alert("chao em");
          }}
        >
          show more
        </button>

        <button
          className="btn btn-primary"
          onClick={this.handleClick1.bind(this, "hello")}
        >
          Click me ne
        </button>
      </div>
    );
  }
}
