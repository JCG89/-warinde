// Reducer regroupant toutes les action
import { actions } from "./actions";

const saveToLocalStorage = (object) => {
  localStorage.setItem("items", JSON.stringify(object));
};
const initialState = {
  items:
    JSON.parse(localStorage.getItem("items")) !== null
      ? JSON.parse(localStorage.getItem("items"))
      : [],
};
const onlineStoreReducer = (state = initialState, action) => {
  switch (action.type) {
    //   Action lié à l'ajout au panier
    case actions.ADD_TO_CART:
      return Object.assign({}, state, {
        items: [...state.items, action.payload],
      });
    // Mise à jour du panier
    case actions.UPDATE_CART:
      return Object.assign({}, state, {
        items: state.items.map((item) => {
          return item.id === action.payload.id
            ? Object.assign({}, item, {
                quantity: action.payload.quantity,
              })
            : item;
        }),
      });
    // Suppression d'un item
    case actions.REMOVE_FROM_CART:
      return Object.assign({}, state, {
        items: state.items.filter((item) => {
          return item.id !== action.payload;
        }),
      });
    case actions.SAVE_CART:
      saveToLocalStorage(action.payload.items);
      return state;

    default:
      return state;
  }
};
export default onlineStoreReducer;
