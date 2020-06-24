import React, { ReactElement } from "react";
import { Provider, useAppContext } from "./context";
import reducer from "./reducer";
import state from "./state";

interface Props {
  children: ReactElement;
}

export default function ({ children }: Props) {
  return (
    <Provider state={state} dispatch={reducer}>
      {children}
    </Provider>
  );
}

export { useAppContext };
