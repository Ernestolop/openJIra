import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';

const EntryCard = ({entry}) => {
    return (
        <Card
            sx={{
                marginBottom: 1,
            }}
        >
            <CardActionArea>
                <CardContent>
                    <Typography variant="h5" sx={{ whiteSpace: 'pre-line' }} >{entry.description    }</Typography>
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