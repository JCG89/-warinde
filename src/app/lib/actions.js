// Définition des actions
import { v4 as uuidv4 } from "uuid";

export const actions = {
  GET_ITEMS: "GET_ITEMS",
  ADD_TO_CART: "ADD_TO_CART",
  UPDATE_CART: "UPDATE_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  SAVE_CART: "SAVE_CART",
};

// Fonctions

export const addToCart = (item, quantity) => {
  return {
    type: actions.ADD_TO_CART,
    payload: { id: uuidv4(), quantity: quantity, details: item },
  };
};
export const updateCart = (id, quantity) => {
  return {
    type: actions.UPDATE_CART,
    payload: { id: id, quantity: quantity },
  };
};
export const removeFromCart = (id) => {
  return {
    type: actions.REMOVE_FROM_CART,
    payload: id,
  };
};
export const saveCart = (items) => {
  return {
    type: actions.SAVE_CART,
    payload: { items: items },
  };
};
