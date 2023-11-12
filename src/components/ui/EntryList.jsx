import { useContext, useMemo } from 'react';

import { Paper, List } from '@mui/material';

import { EntryCard } from '.';
import { EntriesContext } from '@/context/entries';
import { UIContext } from '@/context/ui';
import styles from './css/EntryList.module.css';

const EntryList = ({ status }) => {

    const { entries, updateEntry } = useContext(EntriesContext);
    const { isDragging, setIsDragging } = useContext(UIContext);

    const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status), [entries]);

    const allowDrop = e => e.preventDefault();

    const handleDrop = e => {
        const id = e.dataTransfer.getData('id');
        const entry = entries.find(entry => entry._id === id);
        entry.status = status;
        updateEntry(entry);
        setIsDragging(false);
    }

    return (
        <div
            onDrop={handleDrop}
            onDragOver={allowDrop}
            className={isDragging ? styles.dragging : ''}
        >
            <Paper sx={
                {
                    height: 'calc(100vh - 250px)',
                    overflow: 'scroll',
                    backgroundColor: 'transparent',
                    padding: '1px 3px'
                }
            }>
                <List sx={{
                    opacity: isDragging ? 0.2 : 1,
                    transition: 'all 0.3s',

                }}>
                    {
                        entriesByStatus.map(entry => <EntryCard key={entry._id} entry={entry} />)
                    }
                </List>
            </Paper>
        </div>
    )
}

export default EntryList;