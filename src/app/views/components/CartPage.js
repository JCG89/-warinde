import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCart, removeFromCart } from "../../lib/actions";
import { Link } from "react-router-dom";

const Row = (props) => {
  const { id, details, quantity } = props.item;
  const [qty, setQty] = useState(quantity);
  const dispatch = useDispatch(quantity, details);
  const update = (action) => {
    if (action === "increment") {
      setQty(qty + 1);
    }
    if (action === "decrement") {
      setQty(qty - 1);
    }
  };
  const remove = (id) => {
    dispatch(removeFromCart(id));
  };
  useEffect(() => {
    dispatch(updateCart(id, qty));
  }, [qty]);
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
                update("decrement");
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
              update("increment");
            }}
          >
            +
          </button>
        </div>
      </td>
      <td>{(qty * details.price).toFixed(2)}</td>
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
        return <Row item={item} key={item.id} />;
      })}
    </table>
  );
};

export const CartPage = () => {
  const items = useSelector((state) => state.items);
  const [subTotal, setSubTotal] = useState(0.0);
  const [total, setTotal] = useState(0.0);
  const shipping = 2.0;

  useEffect(() => {
    let totals = items.map((item) => {
      return item.quantity * item.details.price;
    }, []);
    setSubTotal(totals.reduce((item1, item2) => item1 + item2, 0));
    setTotal(subTotal + shipping);
    console.log(`Vous avez ${items.length} dans le panier`);
  }, [items, total, subTotal]);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm cart">
            <Table items={items} />
          </div>
          <div className="col-sm-3 order-summary">
            <ul className="list-group">
              <li className="list-group-item">Récapitulatif de la commande</li>

              <li className="list-group-item">
                <ul className="list-group flex">
                  <li className="text-left">Sous total</li>
                  <li className="text-right">{subTotal.toFixed(2)}</li>
                </ul>
                <ul className="list-group flex">
                  <li className="text-left">Expédition</li>
                  <li className="text-right">€{shipping.toFixed(2)}</li>
                </ul>
                <ul className="list-group flex">
                  <li className="coupon crimson">
                    <small> Ajouter Code promo</small>
                  </li>
                </ul>
              </li>

              <li className="list-group-item ">
                <ul className="list-group flex">
                  <li className="text-left">Total</li>
                  <li className="text-right">
                    €{subTotal == 0.0 ? "0.00" : total.toFixed(2)}
                  </li>
                </ul>
              </li>
            </ul>
            <Link
              to="/checkout"
              className={`white btn btn-light btn-lg btn-block checkout ${
                !items.length && "disabled"
              } bg-warning`}
              style={{ color: "white" }}
            >
              Aperçu de la commande
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
