import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import { tasks } from "./reducer/reducerIndex";

export const store = createStore(tasks, applyMiddleware(logger));
