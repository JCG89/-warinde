import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Navbar = () => {
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
              />
            </form>
          </div>
          <div className="menu-right">{/* cart */}</div>
        </div>
      </div>
    </nav>
  );
};
export const Card = () => {
  return (
    <div className="col-sm-4">
      <div className="card">
        <img
          width="170"
          height="170"
          src={process.env.PUBLIC_URL + `/assets/0/citron.png`}
          alt="citron"
        />
        <div className="card-body">
          <div className="row">
            <div className="col-sm-6">
              <h4>Citron</h4>
            </div>
            <div className="col-sm-6">
              <p>€2.99/unit</p>
              <button className="btn btn-warning btn-sm">view product</button>
            </div>
          </div>
        </div>
      </div>
      {/* modal */}
    </div>
  );
};
export const List = ({ data }) => {
  return (
    <div className="col-sm">
      <div className="row">
        <Card />
      </div>
    </div>
  );
};
