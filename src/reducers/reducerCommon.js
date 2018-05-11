import {
    initialStateCommon,
    COMMON_TOGGLE_PERMIT
} from "../constants/constants";

export default function reducer(state = initialStateCommon, action) {
    switch (action.type) { 
        case COMMON_TOGGLE_PERMIT:
            return {
                ...state,
                isPermit: !state.isPermit
            }
        default:
            return state;
    }
}

