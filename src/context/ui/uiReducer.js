import { UI_OPEN_DRAWER, UI_CLOSE_DRAWER } from "./types";

const uiReducer = (state, action) => {
    switch(action.type) {
        case UI_OPEN_DRAWER:
            return {
                ...state,
                sideMenuOpen: true
            };
        case UI_CLOSE_DRAWER:
            return {
                ...state,
                sideMenuOpen: false
            };
        default:
            return state;
    }
}

export default uiReducer;