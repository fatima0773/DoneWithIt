import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk.withExtraArgument()))
);

export default store;

// ACTIONS:
// -> user adds a new task
// -> user marks a task done
// -> user marks a task undone
// -> user deletes a task
