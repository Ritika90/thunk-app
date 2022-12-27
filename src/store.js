import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { logger } from "redux-logger";

import rootReducer from "middleware/reducers";

export const store = configureStore({
  middleware: [thunk, logger],
  reducer: rootReducer,
});
