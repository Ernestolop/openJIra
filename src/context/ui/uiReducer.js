import { UI_OPEN_DRAWER, UI_CLOSE_DRAWER, UI_OPEN_FORM_ADDING_TASK, UI_CLOSE_FORM_ADDING_TASK, UI_SET_IS_DRAGGING } from "./types";

const uiReducer = (state, action) => {
    switch (action.type) {
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
        case UI_OPEN_FORM_ADDING_TASK:
            return {
                ...state,
                formAddingTaskOpen: true
            };
        case UI_CLOSE_FORM_ADDING_TASK:
            return {
                ...state,
                formAddingTaskOpen: false
            };
        case UI_SET_IS_DRAGGING:
            return {
                ...state,
                isDragging: action.payload
            };
        default:
            return state;
    }
}

export default uiReducer;