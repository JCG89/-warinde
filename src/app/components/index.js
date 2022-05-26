import { Navbar, List } from "..";
import { list } from "../data/data";
import { useState, useEffect } from "react";

const SideMenu = ({ LoadCategory, category }) => {
  //Liens de la sidebar
  const links = ["Fruits", "Légumes", "Produits Frais", "Épicerie", "Boissons"];

  return (
    <>
      <div className="col-sm-2 sidebar">
        <ul>
          {links.map((link, index) => {
            return (
              <li
                className={category === index && "active"} //Mettre en gras la categorie  active
                key={index}
                onClick={() => LoadCategory(index)}
              >
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
  const [isFiltering, setIsFiltering] = useState(false); //Filtre de base

  const [filtered, setFiltered] = useState(false); //Produits filtrés

  //  Fonction pour charger les catégories par l'index au click
  const LoadCategory = (i) => {
    setCategory(i);
  };
  // Fonction de recherche des produits
  const search = (input) => {
    const fullList = list.flat();
    let result = fullList.filter((product) => {
      const name = product.name.toLocaleLowerCase();
      const term = input.toLocaleLowerCase();

      return name.indexOf(term) > -1;
    });
    setFiltered(result);
  };
  useEffect(() => {}, []);
  return (
    <>
      <Navbar filter={search} setIsFiltering={setIsFiltering} />

      <div className="container">
        <div className="row">
          <SideMenu LoadCategory={LoadCategory} category={category} />
          <div className="col-sm">
            <div className="row">
              <List
                data={isFiltering ? filtered : list[category]}
                category={category}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
