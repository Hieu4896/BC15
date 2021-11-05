import React, { Component } from "react";

export default class Profile extends Component {
  // phương thức render là phương thức trả về giao diện của component này
  render() {
    return (
      <div>
        <div className="card text-left">
          <img className="card-img-top" src="holder.js/100px180/" alt />
          <div className="card-body">
            <h4 className="card-title">Trần Minh Hiếu</h4>
            <p className="card-text">04/08/1996</p>
          </div>
        </div>
      </div>
    );
  }
}
