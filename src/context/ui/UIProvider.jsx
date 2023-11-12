import { useReducer } from 'react';

import { UIContext, uiReducer, UI_OPEN_DRAWER, UI_CLOSE_DRAWER, UI_OPEN_FORM_ADDING_TASK, UI_CLOSE_FORM_ADDING_TASK, UI_SET_IS_DRAGGING } from ".";

const UI_INICIAL_STATE = {
    sideMenuOpen: false,
    formAddingTaskOpen: false,
    isDragging: false
}

const UIProvider = ({ children }) => {

    const [state, dispatch] = useReducer(uiReducer, UI_INICIAL_STATE);

    //Methods
    const openSideMenu = () => dispatch({ type: UI_OPEN_DRAWER });
    const closeSideMenu = () => dispatch({ type: UI_CLOSE_DRAWER });
    const openFormAddingTask = () => dispatch({ type: UI_OPEN_FORM_ADDING_TASK });
    const closeFormAddingTask = () => dispatch({ type: UI_CLOSE_FORM_ADDING_TASK });
    const setIsDragging = isDragging => dispatch({ type: UI_SET_IS_DRAGGING, payload: isDragging });

    return (
        <UIContext.Provider value={{
            ...state,
            //Methods
            openSideMenu,
            closeSideMenu,
            openFormAddingTask,
            closeFormAddingTask,
            setIsDragging
        }}>
            {children}
        </UIContext.Provider>
    )
}

export default UIProvider;