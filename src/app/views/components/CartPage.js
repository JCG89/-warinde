import React from "react";

const Row = () => {
  return (
    <tr>
      <td>
        <img
          width="70"
          height="70"
          src={process.env.PUBLIC_URL + `/assets/0/citron.png`}
          alt="citrons"
        />
      </td>
      <td>ref</td>
      <td>€ 0.00</td>
      <td>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-secondary">
            -
          </button>
          <span className="btn btn-light">1</span>
          <button type="button" className="btn btn-secondary">
            +
          </button>
        </div>
      </td>
      <td>€2.99</td>
      <td>
        <button type="button" className="btn btn-danger remove">
          X
        </button>
      </td>
    </tr>
  );
};

const Table = () => {
  return (
    <table>
      <tr>
        <th width="200">Product</th>
        <th width="80">Reference</th>
        <th width="150">Price</th>
        <th width="150">Quantity</th>
        <th width="200">Total</th>
      </tr>
      <Row />
      <Row />
    </table>
  );
};

export const CartPage = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm cart">
            <Table />
          </div>
          <div className="col-sm-3 order-summary">
            <ul className="list-group">
              <li className="list-group-item">Order Summary</li>

              <li className="list-group-item">
                <ul className="list-group flex">
                  <li className="text-left">Subtotal</li>
                  <li className="text-right">€0.00</li>
                </ul>
                <ul className="list-group flex">
                  <li className="text-left">shipping</li>
                  <li className="text-right">€0.00</li>
                </ul>
                <ul className="list-group flex">
                  <li className="coupon crimson">
                    <small> Add Coupon Code</small>
                  </li>
                </ul>
              </li>

              <li className="list-group-item ">
                <ul className="list-group flex">
                  <li className="text-left">Total</li>
                  <li className="text-right">€0.00</li>
                </ul>
              </li>
            </ul>
            <button
              type="button"
              className="btn btn-light btn-lg btn-block checkout bg-crimson"
              disabled="true"
            >
              <a href="#" className="white">
                Checkout
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
