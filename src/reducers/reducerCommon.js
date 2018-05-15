import {
    initialStateCommon,
    COMMON_TOGGLE_PERMIT,
    COMMON_LOADED
} from "../constants/constants";

export default function reducer(state = initialStateCommon, action) {
    switch (action.type) { 
        case COMMON_TOGGLE_PERMIT:
            return {
                ...state,
                isPermit: !state.isPermit
            }
        case COMMON_LOADED:
            return {
                ...state,
                isLoaded: true,
            }
        default:
            return state;
    }
}

