import React, { Component } from "react";

export default class ItemShoe extends Component {
  render() {
    let { data, handleWatchDetail, handleBuyShoe } = this.props;
    let { image, name } = data;
    return (
      <div className="col-3 p-4">
        <div className="card text-left h-100">
          <img className="card-img-top" src={image} alt="" />
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
          </div>
          <button
            onClick={() => {
              handleWatchDetail(data);
            }}
            className="btn btn-dark"
          >
            Detail
          </button>
          <button
            onClick={() => {
              handleBuyShoe(data);
            }}
            className="btn btn-success"
          >
            Buy
          </button>
        </div>
      </div>
    );
  }
}
