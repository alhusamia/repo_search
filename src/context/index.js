import { useReducer, createContext } from "react";
import reducer from "./reducers";
import {initialState} from "./reducers/initialState";

const Context = createContext({});

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, Provider };
