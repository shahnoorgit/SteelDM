import { store } from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";

interface propsType {
  children: React.ReactNode;
}

const ReduxProvider = ({ children }: propsType) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
