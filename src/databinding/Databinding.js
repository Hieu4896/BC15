import React, { Component } from "react";

export default class Databinding extends Component {
  renderImg = () => {
    return (
      <div>
        <img src="http://i.pravatar.cc/800" />
      </div>
    );
  };

  render() {
    let title = "Abc";
    let srcImg = "http://i.pravatar.cc/200";
    let sinhVien = {
      maSV: 1,
      tenSV: "Tran Minh Hieu",
      namSinh: "04/08/1996",
      image: "http://i.pravatar.cc/400",
    };
    return (
      <div className="container">
        Databinding
        <p id="txt">{title}</p>
        <br />
        <img src={srcImg} alt="hinh" />
        <br />
        <div className="card w-25">
          <img src={sinhVien.image} />
          <div className="card-body">
            <p>Ho Ten : {sinhVien.tenSV}</p>
            <p>Nam Sinh : {sinhVien.namSinh}</p>
            <p>Ma Sinh Vien : {sinhVien.maSV}</p>
            {this.renderImg()}
          </div>
        </div>
      </div>
    );
  }
}
