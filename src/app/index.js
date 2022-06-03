import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faEye,
  faHamburger,
} from "@fortawesome/free-solid-svg-icons";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./lib/actions";

export const Navbar = ({ filter, setIsFiltering }) => {
  const items = useSelector((state) => state.items);
  return (
    <nav className="navbar orange navbar-expand-lg navbar-light bg-light fixed-top">
      <Link to="/" className="navbar-brand black">
        @WARINDE
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="ml-auto cart">
          <div>
            <form className="search form-inline my-2 my-lg-0">
              <input
                className="form-control ml-sm-2"
                type="search"
                placeholder="Rechercher"
                aria-label="Search"
                onChange={(e) => {
                  setIsFiltering(e.target.value.length > 0);
                  filter(e.target.value);
                }}
              />
            </form>
          </div>
          <div className="menu-right"> </div>
        </div>
      </div>
      <Link to="/panier">
        {" "}
        <i className="far fa-shopping-cart fa-2x">
          <FontAwesomeIcon icon={faShoppingCart} style={{ color: "red" }} />
        </i>
        <span className="badge rounded-pill bg-success">
          {items.length > 0 && items.length}
        </span>
      </Link>
    </nav>
  );
};
export const Card = ({ item, addToCart }) => {
  return (
    <div className="col-sm-4">
      <div className="card">
        <img
          width="170"
          height="170"
          src={
            process.env.PUBLIC_URL + `/assets/${item.category}/${item.image}`
          }
          alt={item.name}
        />
        <div className="card-body">
          <div className="row">
            <div className="col-sm-6">
              <h4>{item.name}</h4>
            </div>
            <div className="col-sm-6">
              <p>
                {item.price}/{item.unit}
              </p>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target={`#${item.ref}`}
              >
                <FontAwesomeIcon icon={faEye} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal item={item} />
    </div>
  );
};
export const Modal = ({ item }) => {
  const [qty, setQty] = useState(0);
  const dispatch = useDispatch();

  const add = (item, quantity) => {
    dispatch(addToCart(item, quantity));
  };
  return (
    <div
      className="modal fade "
      id={item.ref}
      data-backdrop="static"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              {item.name}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-sm-4">
                <img
                  width="170"
                  height="170"
                  src={
                    process.env.PUBLIC_URL +
                    `/assets/${item.category}/${item.image}`
                  }
                  alt={item.name}
                />
              </div>

              <div className="col-sm">
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </p>
                <h3 className="price">
                  {item.price}€/{item.unit}
                </h3>{" "}
                <br />
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setQty(qty > 0 ? qty - 1 : 0)}
                  >
                    -
                  </button>
                  <span className="btn btn-light qty">{qty}</span>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setQty(qty + 1)}
                  >
                    +
                  </button>
                </div>
                <br />
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Fermer
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => add(item, qty)}
            >
              Ajouter au panier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export const List = ({ data, category, updateCart }) => {
  return (
    <div className="col-sm">
      <div className="row">
        {data.map((item) => (
          <Card
            key={item.ref}
            item={item}
            updateCart={updateCart}
            category={category}
          />
        ))}
      </div>
    </div>
  );
};
