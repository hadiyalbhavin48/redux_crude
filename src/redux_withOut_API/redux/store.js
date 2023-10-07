import { createStore } from "redux";
// import rootReducer from './reducer/index'
import rootReducer from '../redux/reducers/index'
const store = createStore(
    rootReducer,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;