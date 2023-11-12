import { useContext, useMemo } from 'react';

import { Paper, List } from '@mui/material';

import { EntryCard } from '.';
import { EntriesContext } from '@/context/entries';

const EntryList = ({ status }) => {

    const { entries } = useContext(EntriesContext);

    const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status), [entries]);

    return (
        <div>
            <Paper sx={
                {
                    height: 'calc(100vh - 250px)',
                    overflow: 'scroll',
                    backgroundColor: 'transparent',
                    padding: '1px 3px'
                }
            }>
                <List sx={{ opacity: 1 }}>
                    {
                        entriesByStatus.map(entry => <EntryCard key={entry._id} entry={entry} />)
                    }
                </List>
            </Paper>
        </div>
    )
}

export default EntryList;