import { legacy_createStore as createStore, combineReducers, applyMiddleware} from "redux"
import { mainReducer } from "./mainReducer"
import { composeWithDevTools } from "redux-devtools-extension";

const rootReduser = combineReducers({
    main: mainReducer,
})

export const store = createStore(rootReduser, composeWithDevTools(applyMiddleware())); //редьюсер передается в стор