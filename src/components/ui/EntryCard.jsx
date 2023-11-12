import { useContext } from 'react';

import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';

import { UIContext } from '@/context/ui';

const EntryCard = ({ entry }) => {

    const { setIsDragging } = useContext(UIContext);

    const handleDragStart = (e, id) => {
        setIsDragging(true);
        e.dataTransfer.setData('id', id);
    }

    const handleDragOver = e => {
        setIsDragging(false);
    }

    return (
        <Card
            sx={{
                marginBottom: 1,
            }}
            draggable
            onDragStart={e => handleDragStart(e, entry._id)}
            onDragEnd={handleDragOver}
        >
            <CardActionArea>
                <CardContent>
                    <Typography variant="h5" sx={{ whiteSpace: 'pre-line' }} >{entry.description}</Typography>
                </CardContent>
                <CardActions
                    sx={
                        {
                            display: 'flex',
                            justifyContent: 'end',
                            paddingRight: 2,
                        }
                    }>
                    <Typography variant="body2">Hace 30 minutos</Typography>
                </CardActions>
            </CardActionArea>
        </Card>
    )
}

export default EntryCard;