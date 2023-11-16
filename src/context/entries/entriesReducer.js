import { ADD_ENTRY, REFRESH_ENTRIES, UPDATE_ENTRY } from '.'

const entriesReducer = (state, action) => {
    switch (action.type) {
        case REFRESH_ENTRIES:
            return {
                ...state,
                entries: [...action.payload]
            }
        case ADD_ENTRY:
            return {
                ...state,
                entries: [...state.entries, action.payload]
            }
        case UPDATE_ENTRY:
            return {
                ...state,
                entries: state.entries.map(entry => {
                    if (entry._id === action.payload._id) {
                        entry.status = action.payload.status;
                        entry.description = action.payload.description;
                    }
                    return entry;
                })
            }
        default:
            return state;
    }
}

export default entriesReducer;