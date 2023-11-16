import { useEffect, useReducer } from 'react'

import { v4 as uuidv4 } from 'uuid'

import { EntriesContext, entriesReducer, ADD_ENTRY, UPDATE_ENTRY, REFRESH_ENTRIES } from ".";
import { entriesApi } from '@/apis';

const ENTRIES_INITIAL_STATE = {
    entries: []
}

const EntriesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

    const refresEntries = async () => {
        const {data} = await entriesApi.get('/entries');
        dispatch({ type: REFRESH_ENTRIES, payload: data });
    }

    useEffect(() => {
        refresEntries();
    }, [])
    

    const addNewEntry = (description) => {
        const entry = {
            _id: uuidv4(),
            description,
            status: 'pending',
            createAt: Date.now(),
        }
        dispatch({ type: ADD_ENTRY, payload: entry })
    }

    const updateEntry = entry => {
        dispatch({ type: UPDATE_ENTRY, payload: entry })
    }

    return (
        <EntriesContext.Provider value={{
            ...state,
            //Methods
            addNewEntry,
            updateEntry
        }}>
            {children}
        </EntriesContext.Provider>
    )
}

export default EntriesProvider;