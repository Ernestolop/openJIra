import { useContext } from 'react';

import { useRouter } from 'next/router';

import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';

import { UIContext } from '@/context/ui';

const EntryCard = ({ entry }) => {

    const { setIsDragging } = useContext(UIContext);
    const useRoute = useRouter();

    const handleDragStart = (e, id) => {
        setIsDragging(true);
        e.dataTransfer.setData('id', id);
    }

    const handleDragOver = e => {
        setIsDragging(false);
    }

    const handleClick = e => {
        useRoute.push(`/entries/${entry._id}`);
    }

    return (
        <Card
            sx={{
                marginBottom: 1,
            }}
            draggable
            onDragStart={e => handleDragStart(e, entry._id)}
            onDragEnd={handleDragOver}
            onClick={handleClick}
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