import { createStore } from "redux";
import onlineStoreReducer from "./reducers";
import onlineStore from "./reducers";

export const store = createStore(onlineStoreReducer);
