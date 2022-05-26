import { Navbar, List } from "..";
import { list } from "../data/data";

const SideMenu = () => {
  //Liens de la sidebar
  const links = ["Légumes", "Fruits", "Produits Frais", "Épicerie", "Boissons"];
  return (
    <>
      <div className="col-sm-2 sidebar">
        <ul>
          {links.map((link) => {
            return <li>{link}</li>;
          })}
        </ul>
      </div>
    </>
  );
};
const App = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <div className="row">
          <SideMenu />
          <div className="col-sm">
            <div className="row">
              <List data={list} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
