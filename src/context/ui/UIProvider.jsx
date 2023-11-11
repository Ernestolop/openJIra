import { useReducer } from 'react';

import { UIContext, uiReducer, UI_OPEN_DRAWER, UI_CLOSE_DRAWER } from ".";

const UI_INICIAL_STATE = {
    sideMenuOpen: false,
}

const UIProvider = ({ children }) => {

    const [state, dispatch] = useReducer(uiReducer, UI_INICIAL_STATE);

    //Methods
    const openSideMenu = () => dispatch({ type: UI_OPEN_DRAWER });
    const closeSideMenu = () => dispatch({ type: UI_CLOSE_DRAWER });

    return (
        <UIContext.Provider value={{
            ...state,
            //Methods
            openSideMenu,
            closeSideMenu
        }}>
            {children}
        </UIContext.Provider>
    )
}

export default UIProvider;