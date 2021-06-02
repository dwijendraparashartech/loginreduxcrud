import { userConstants } from "../_constants/user.constants";


export function registration(state = {}, action) {
    switch (action.type) {
        case userConstants:
            return { registering: true };
        case userConstants.REGISTER_SUCCESS:
            return {};
        case userConstants.REGISTER_FAILURE:
            return {};
        default:
            return state
    }
}