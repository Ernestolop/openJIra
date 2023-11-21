import { useEffect, useReducer } from 'react'

import { useSnackbar } from 'notistack';

import { EntriesContext, entriesReducer, ADD_ENTRY, UPDATE_ENTRY, REFRESH_ENTRIES } from ".";
import { entriesApi } from '@/apis';

const ENTRIES_INITIAL_STATE = {
    entries: []
}

const EntriesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);
    const { enqueueSnackbar } = useSnackbar();

    const refresEntries = async () => {
        const { data } = await entriesApi.get('/entries');
        dispatch({ type: REFRESH_ENTRIES, payload: data });
    }

    useEffect(() => {
        refresEntries();
    }, [])


    const addNewEntry = async description => {
        try {
            const { data } = await entriesApi.post('/entries', { description })
            dispatch({ type: ADD_ENTRY, payload: data })

        } catch (error) {
            console.log(error);
        }
    }

    const updateEntry = async ({ _id, description, status }, showSnackbar = false) => {
        try {
            const { data } = await entriesApi.put(`/entries/${_id}`, { _id, description, status });
            dispatch({ type: UPDATE_ENTRY, payload: data })
            if (showSnackbar) {
                enqueueSnackbar('Entrada actualizada', { variant: 'success', autoHideDuration: 2000, anchorOrigin: { vertical: 'top', horizontal: 'right' } })
            }
        } catch (error) {
            console.log(error);
        }
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