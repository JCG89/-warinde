import React from "react";
import { List } from "..";

export const SideMenu = ({ loadCategory, category }) => {
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
                onClick={() => loadCategory(index)}
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
const Home = ({
  category,
  data,
  count,
  addToCart,
  loadCategory,
  isFiltering,
  filtered,
}) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <SideMenu loadCategory={loadCategory} category={category} />
          <div className="col-sm">
            <div className="row">
              <List
                data={isFiltering ? filtered : data[category]}
                category={category}
                count={count}
                addToCart={addToCart}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
