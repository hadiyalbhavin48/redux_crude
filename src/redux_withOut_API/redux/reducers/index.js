// import { reducers } from "./reducer"
// import { reducers } from "../../redux/reducers/reducer"
import { allReducersList } from "./reducer"
import { combineReducers } from "redux"
const allreducers = combineReducers({
    allUser: allReducersList
})

export default allreducers