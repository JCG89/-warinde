import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faEye,
  faHamburger,
} from "@fortawesome/free-solid-svg-icons";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Navbar = ({ filter, setIsFiltering }) => {
  return (
    <nav className="navbar orange navbar-expand-lg navbar-light bg-light fixed-top">
      <a href="" className="navbar-brand crimson">
        @WARINDE
      </a>
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
      <FontAwesomeIcon icon={faShoppingCart} style={{ color: "red" }} />
    </nav>
  );
};
export const Card = ({ product }) => {
  return (
    <div className="col-sm-4">
      <div className="card">
        <img
          width="170"
          height="170"
          src={
            process.env.PUBLIC_URL +
            `/assets/${product.category}/${product.image}`
          }
          alt={product.name}
        />
        <div className="card-body">
          <div className="row">
            <div className="col-sm-6">
              <h4>{product.name}</h4>
            </div>
            <div className="col-sm-6">
              <p>
                {product.price}/{product.unit}
              </p>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target={`#${product.ref}`}
              >
                <FontAwesomeIcon icon={faEye} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal product={product} />
    </div>
  );
};
export const Modal = ({ product }) => {
  return (
    <div
      className="modal fade "
      id={product.ref}
      data-backdrop="static"
      tabindex="-1"
      role="dialog"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">
              {product.name}
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div className="row">
              <div className="col-sm-4">
                <img
                  width="170"
                  height="170"
                  src={
                    process.env.PUBLIC_URL +
                    `/assets/${product.category}/${product.image}`
                  }
                  alt={product.name}
                />
              </div>

              <div className="col-sm">
                <p class="lead">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </p>
                <h3 className="price">
                  {product.price}€/{product.unit}
                </h3>{" "}
                <br />
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <button type="button" className="btn btn-secondary">
                    -
                  </button>
                  <span className="btn btn-light qty">1</span>
                  <button type="button" className="btn btn-secondary">
                    +
                  </button>
                </div>
                <br />
              </div>
            </div>
          </div>

          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Fermer
            </button>
            <button type="button" class="btn btn-primary">
              Ajouter au panier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export const List = ({ data, category }) => {
  return (
    <div className="col-sm">
      <div className="row">
        {data.map((product) => (
          <Card key={product.ref} product={product} />
        ))}
      </div>
    </div>
  );
};
