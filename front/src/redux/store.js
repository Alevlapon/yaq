import {
  legacy_createStore as createStore,
  compose,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const saveState = (state) => {
  const serialisedState = JSON.stringify(state);
  window.localStorage.setItem("app_state", serialisedState);
};

const loadstate = () => {
  try {
    const serialisedState = window.localStorage.getItem("app_state");
    if (!serialisedState) return undefined;
    return JSON.parse(serialisedState);
  } catch (err) {
    return undefined;
  }
};

const oldState = loadstate();
const store = createStore(
  rootReducer,
  oldState,
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => {
  console.log("local storage updated");
  saveState(store.getState());
});

export default store;
