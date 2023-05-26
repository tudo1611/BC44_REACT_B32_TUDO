import React, { Component } from "react";
import { shoeArr } from "./data";
import ListShoe from "./ListShoe";
import DetailShoe from "./DetailShoe";
import ModalCartShoe from "./ModalCartShoe";
export default class Ex_ShoeShop extends Component {
  state = {
    shoeArr: shoeArr,
    detailShoe: shoeArr[0],
    cart: [],
  };
  handleViewDetail = (shoe) => {
    this.setState({
      detailShoe: shoe,
    });
  };
  handleAddToCart = (shoe) => {
    let cloneCart = [...this.state.cart];
    let index = cloneCart.findIndex((item) => item.id == shoe.id);
    if (index == -1) {
      // sp chưa có trong giỏ hàng => push
      let newShoe = { ...shoe, amount: 1 }; //copy shoe vào newShoe và thêm key amount
      cloneCart.push(newShoe);
    } else {
      // đã có trong giỏ hàng => tăng số lượng lên 1
      cloneCart[index].amount = cloneCart[index].amount + 1;
    }

    // cloneCart.push(shoe);
    this.setState({ cart: cloneCart });
  };
  handleDel = (idShoe) => {
    let cloneCart = this.state.cart.filter((item) => item.id !== idShoe);
    this.setState({
      cart: cloneCart,
    });
  };
  handleChangeAmount = (id, increDecre) => {
    // increDecre === true: tăng số lượng, false: giảm số lượng
    let cloneCart = [...this.state.cart];
    let index = cloneCart.findIndex((item) => item.id === id);
    // xử lý tăng giảm
    if (increDecre) {
      cloneCart[index].amount += 1;
    } else {
      if (cloneCart[index].amount > 1) {
        cloneCart[index].amount -= 1;
      }
    }
    //cập nhật lại giá trị và render lại cart
    this.setState({
      cart: cloneCart,
    });
  };

  render() {
    // let totalNum = this.state.cart.reduce((ttn, item, index) => {
    //   return (ttn += item.amount);
    // });
    return (
      <div>
        <ModalCartShoe
          handleChangeAmount={this.handleChangeAmount}
          handleDelShoe={this.handleDel}
          cart={this.state.cart}
        />
        <div className="text-right mx-5 ">
          <span
            className="text-danger"
            style={{ cursor: "pointer", fontSize: "17px", fontWeight: "bold" }}
            data-toggle="modal"
            data-target="#modelId"
          >
            Cart
          </span>
        </div>
        <ListShoe
          handleBuy={this.handleAddToCart}
          list={this.state.shoeArr}
          handleViewDetail={this.handleViewDetail}
        />
        <DetailShoe detail={this.state.detailShoe} />
      </div>
    );
  }
}
