// import { ActionType } from "../../constants/action-type"
import { ActionType } from "../../constants/action-type";
const initialState = {
    userData: [],
    selectedUser: {}
}
export const allReducersList = (state = initialState, { type, payload }) => {
    switch (type) {

        case ActionType.ADD_USER:
            // console.log("Reducer ", payload);
            return {
                userData: [...state.userData, payload]
            }
            break;

        case ActionType.ALL_USER:
            return {
                userData: payload
            }
            break;
        case ActionType.DELETE_USER:
            console.log("reducer delete ", payload);
            return {
                userData: state.userData.filter((user) => user.id !== payload)
            }
            break;

        case ActionType.EDIT_USER:
            return {
               
                userData: state.userData.map((user) =>
                    user.id === payload.id ? payload : user
                )
            }
            break;

        case ActionType.READ_USER:
            const userDetails = state.userData.find((user) => user.id === payload)
            return {
                ...state,
                selectedUser: userDetails || {}
            }
            break;

        default:
            return state
    }

}

