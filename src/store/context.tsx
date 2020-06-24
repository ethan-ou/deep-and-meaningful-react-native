import React, {
  createContext,
  useContext,
  useReducer,
  ReactElement,
} from "react";
import { AppState, ActionTypes } from "./types";

const StateContext = createContext<undefined | AppState>(undefined);
const DispatchContext = createContext<undefined | React.Dispatch<ActionTypes>>(
  undefined
);

interface Props {
  children: ReactElement;
  state: AppState;
  dispatch: (state: AppState, action: ActionTypes) => AppState;
}

function Provider({ children, state, dispatch }: Props) {
  const [appState, appDispatch] = useReducer(dispatch, state);
  return (
    <StateContext.Provider value={appState}>
      <DispatchContext.Provider value={appDispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

function useStateContext() {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error("useStateContext must be used within an AppProvider");
  }
  return context;
}
function useDispatchContext() {
  const context = useContext(DispatchContext);
  if (context === undefined) {
    throw new Error("useDispatchContext must be used within an AppProvider");
  }
  return context;
}

function useAppContext(): [AppState, React.Dispatch<ActionTypes>] {
  return [useStateContext(), useDispatchContext()];
}

export { Provider, useAppContext };
