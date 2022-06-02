import { createStore } from "redux";
import onlineStore from "./reducers";

export const store = createStore(onlineStore);
