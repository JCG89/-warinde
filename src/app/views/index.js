import { Navbar } from "..";
import { list } from "../data/data";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartPage } from "./CartPage";
import Home from "./Home";
const App = () => {
  const [category, setCategory] = useState(0);
  const [isFiltering, setIsFiltering] = useState(false); //Filtre de base
  const [count, setCount] = useState(0);
  const [filtered, setFiltered] = useState(false); //Produits filtrés

  //  Fonction pour charger les catégories par l'index au click
  const loadCategory = (i) => {
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
      <BrowserRouter>
        <Navbar filter={search} setIsFiltering={setIsFiltering} count={count} />
        <div className="container">
          <Routes>
            <Route exact path="/panier" element={<CartPage />} />
            <Route
              path="/"
              element={
                <Home
                  loadCategory={loadCategory}
                  category={category}
                  addToCart={setCount}
                  count={count}
                  data={list}
                  setIsFiltering={setIsFiltering}
                  filter={search}
                  isFiltering={isFiltering}
                  filtered={filtered}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
