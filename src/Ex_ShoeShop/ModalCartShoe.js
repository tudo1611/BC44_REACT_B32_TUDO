import React, { Component } from "react";

export default class ModalCartShoe extends Component {
  render() {
    let { cart, handleDelShoe, handleChangeAmount } = this.props;
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content" style={{ width: 800, maxWidth: 800 }}>
            <div className="modal-header">
              <h5 className="modal-title">Cart</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Amount</th>
                    <th>Price($)</th>
                    <th>Total($)</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.id}</td>
                        <td>
                          <img src={item.image} width={50} height={50} alt="" />
                        </td>
                        <td>{item.name}</td>
                        <td>
                          <button
                            onClick={() => {
                              handleChangeAmount(item.id, false);
                            }}
                            className="btn btn-success"
                          >
                            -
                          </button>
                          <strong className="mx-3">{item.amount}</strong>
                          <button
                            onClick={() => {
                              handleChangeAmount(item.id, true);
                            }}
                            className="btn btn-success"
                          >
                            +
                          </button>
                        </td>
                        <td>{item.price}</td>
                        <td>{item.amount * item.price}</td>
                        <td>
                          <button
                            onClick={() => {
                              handleDelShoe(item.id);
                            }}
                            className="btn btn-danger"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="4"></td>
                    <td style={{ fontWeight: "bold" }}>Total($):</td>
                    <td>
                      {this.props.cart.reduce((toTal, item, index) => {
                        return (toTal += item.amount * item.price);
                      }, 0)}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
