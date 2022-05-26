import { Navbar, List } from "..";
import { list } from "../data/data";
import { useState } from "react";

const SideMenu = ({ LoadCategory }) => {
  //Liens de la sidebar
  const links = ["Légumes", "Fruits", "Produits Frais", "Épicerie", "Boissons"];

  return (
    <>
      <div className="col-sm-2 sidebar">
        <ul>
          {links.map((link, index) => {
            return (
              <li key={index} onClick={() => LoadCategory(index)}>
                {link}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
const App = () => {
  const [category, setCategory] = useState(0);
  //  Fonction pour charger les catégories par l'index au click

  const LoadCategory = (i) => {
    setCategory(i);
    console.log(i);
  };
  return (
    <>
      <Navbar />

      <div className="container">
        <div className="row">
          <SideMenu LoadCategory={LoadCategory} />
          <div className="col-sm">
            <div className="row">
              <List data={list} category={category} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
