import { createStore } from "redux";
import rootReducer from "./reducers";

export default function configureStore() {
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__; // add support for Redux dev tools

    return createStore(
        rootReducer,
        composeEnhancers()
    );
}
