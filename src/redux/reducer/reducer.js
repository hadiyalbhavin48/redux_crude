import { ActionType } from "../constants/action-type"
const initialState = {
    userData: []
}
export const reducers = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionType.ALL_USER:
            return {
                ...state,
                userData: payload
            }
            break;

        case ActionType.ADD_USER:
            // console.log("Reducer ", payload);
            return {
                ...state,
                ...payload
            }
            break;
        case ActionType.DELETE_USER:
            // console.log("reducer delete ", payload);
            return {
                ...state,
                userData: state.userData.filter((user) => user.id !== payload)
            }
            break;

        case ActionType.EDIT_USER:
            return {
                ...state,
                ...payload
                // userData: state.userData.filter((user) => user.id == payload.id ? payload : user)
            }
            break;

        default:
            return state
    }

}