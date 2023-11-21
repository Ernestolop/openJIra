import { useMemo, useState, useContext } from 'react';
import { Grid, Card, CardHeader, CardContent, TextField, CardActions, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, capitalize, IconButton } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import { Layout } from '@/components/layouts';
import { dbEntries } from '@/database';
import { EntriesContext } from '@/context/entries';
import { dateFunctions } from '@/utils';
const validStatus = ['pending', 'in-progress', 'finished'];

const EntryPage = ({ entry }) => {

    const [inputValue, setInputValue] = useState(entry.description);
    const [status, setStatus] = useState(entry.status);
    const [touched, setTouched] = useState(false);
    const [saving, setSaving] = useState(false);

    const { updateEntry } = useContext(EntriesContext);

    const isNotValidForm = useMemo(() => inputValue.length <= 0 && touched, [inputValue, touched]);

    const handleTextChanged = e => {
        setInputValue(e.target.value);
    }

    const handleStatusChanged = e => {
        setStatus(e.target.value);
    }

    const handleSave = async () => {
        setSaving(true);
        await updateEntry({
            ...entry,
            description: inputValue,
            status
        }, true);
        setSaving(false);
    }

    return (
        <Layout
            title={entry.description.substring(0, 12)}
            description={entry.description}
            keywords="entrada"
        >
            <Grid
                container
                justifyContent="center"
                sx={{ marginTop: 2 }}
            >
                <Grid item xs={12} sm={8} md={6}>
                    <Card>
                        <CardHeader
                            title="Entrada:"
                            subheader={`Creado hace ${dateFunctions.getFormatDistanceToNow(entry.createAt)}`}
                        />
                        <CardContent>
                            <TextField
                                sx={{ marginTop: 2, marginBottom: 1 }}
                                fullWidth
                                placeholder='Nueva Entrada'
                                autoFocus
                                multiline
                                label='Nueva Entrada'
                                value={inputValue}
                                onChange={handleTextChanged}
                                helperText={isNotValidForm && 'Ingrese una nueva entrada'}
                                onFocus={() => setTouched(false)}
                                onBlur={() => setTouched(true)}
                                error={isNotValidForm}

                            ></TextField>
                            <FormControl>
                                <FormLabel>Estado:</FormLabel>
                                <RadioGroup row>
                                    {validStatus.map(option => (
                                        <FormControlLabel
                                            key={option}
                                            value={option}
                                            label={capitalize(option)}
                                            control={<Radio onChange={handleStatusChanged} checked={status === option} />}
                                        />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </CardContent>
                        <CardActions>
                            <Button
                                startIcon={<SaveIcon />}
                                variant='contained'
                                fullWidth
                                disabled={saving || inputValue.length <= 0}
                                onClick={handleSave}
                            >
                                Guardar
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
            <IconButton
                sx={{
                    position: 'fixed',
                    bottom: 30,
                    right: 30,
                    backgroundColor: 'red',
                }}
            >
                <DeleteOutlineRoundedIcon />
            </IconButton>
        </Layout>
    )
}

export const getServerSideProps = async ({ params }) => {

    const { id } = params;

    const entry = await dbEntries.getEntryById(id);

    if (!entry) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {
            entry
        }
    }
}

export default EntryPage;