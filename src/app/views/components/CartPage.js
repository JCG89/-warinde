import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCart, removeFromCart } from "../../lib/actions";

const Row = (props) => {
  const { id, details, quantity } = props.item;
  const [qty, setQty] = useState(quantity);
  const dispatch = useDispatch(quantity, details);
  const update = (details, quantity) => {
    dispatch(updateCart(details, quantity));
  };
  const remove = (id) => {
    dispatch(removeFromCart(id));
  };
  return (
    <tr>
      <td>
        <img
          width="70"
          height="70"
          src={
            process.env.PUBLIC_URL +
            `/assets/${details.category}/${details.image}`
          }
          alt={details.name}
        />
      </td>
      <td>{details.ref}</td>
      <td>{details.price} €</td>
      <td>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              if (qty > 0) {
                setQty(qty - 1);
                update(details, qty);
              }
              return 0;
            }}
          >
            -
          </button>
          <span className="btn btn-light">{qty}</span>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              setQty(qty + 1);
              update(details, qty);
            }}
          >
            +
          </button>
        </div>
      </td>
      <td>{(quantity * details.price).toFixed(2)}</td>
      <td>
        <button
          type="button"
          className="btn btn-danger remove"
          onClick={() => remove(id)}
        >
          X
        </button>
      </td>
    </tr>
  );
};

const Table = ({ items }) => {
  useEffect(() => {
    console.log(`Vous avez ${items.length} dans le panier`);
  }, []);
  return (
    <table>
      <tr>
        <th width="200">Produit</th>
        <th width="80">Réference</th>
        <th width="150">Prix</th>
        <th width="150">Quantité</th>
        <th width="200">Total</th>
      </tr>
      {items.map((item) => {
        return <Row item={item} key={item.ref} />;
      })}
    </table>
  );
};

export const CartPage = () => {
  const items = useSelector((state) => state.items);
  const [subTotal, setSubTotal] = useState(0.0);
  const [total, setTotal] = useState(0.0);
  const shipping = 10.0;

  useEffect(() => {
    let totals = items.map((item) => {
      return item.quantity * item.details.price;
    });
    setSubTotal(totals.reduce((item1, item2) => item1 + item2, 0));
    setTotal(subTotal + shipping);
    console.log(`Vous avez ${items.length} dans le panier`);
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm cart">
            <Table items={items} />
          </div>
          <div className="col-sm-3 order-summary">
            <ul className="list-group">
              <li className="list-group-item">Order Summary</li>

              <li className="list-group-item">
                <ul className="list-group flex">
                  <li className="text-left">Subtotal</li>
                  <li className="text-right">{subTotal.toFixed(2)}</li>
                </ul>
                <ul className="list-group flex">
                  <li className="text-left">shipping</li>
                  <li className="text-right">€{shipping.toFixed(2)}</li>
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
                  <li className="text-right">
                    €{subTotal == "0.00" ? 0.0 : total.toFixed(2)}
                  </li>
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
