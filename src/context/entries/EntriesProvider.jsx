import { useReducer } from 'react'

import { v4 as uuidv4 } from 'uuid'

import { EntriesContext, entriesReducer } from ".";

const ENTRIES_INITIAL_STATE = {
    entries: [
        {
            _id: uuidv4(),
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
            status: 'pending',
            createAt: Date.now(),
        },
        {
            _id: uuidv4(),
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
            status: 'in-progress',
            createAt: Date.now(),
        },
        {
            _id: uuidv4(),
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
            status: 'finished',
            createAt: Date.now(),
        }
    ],
}

const EntriesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE)
    return (
        <EntriesContext.Provider value={{
            ...state
        }}>
            {children}
        </EntriesContext.Provider>
    )
}

export default EntriesProvider;