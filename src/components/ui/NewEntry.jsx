import { useState, useContext } from "react";

import { TextField, Box, Button } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SaveIcon from '@mui/icons-material/Save';

import { EntriesContext } from "@/context/entries";
import {  UIContext } from "@/context/ui";


const NewEntry = () => {

    const [inputVale, setInputVale] = useState('');
    const [touched, setTouched] = useState(false);
    const { addNewEntry } = useContext(EntriesContext); 
    const { formAddingTaskOpen, openFormAddingTask, closeFormAddingTask } = useContext(UIContext);

    const handleTextChanged = e => {
        setInputVale(e.target.value);
    }

    const handleSave = () => {
        if (inputVale.length === 0) return;
        addNewEntry(inputVale);
        closeFormAddingTask();
        setInputVale('');
        setTouched(false);
    }

    return (
        <Box sx={{
            marginBottom: 2,
            paddingX: 1
        }}>
            {
                formAddingTaskOpen ? (
                    <>
                        <TextField
                            fullWidth
                            sx={{
                                marginTop: 2,
                                marginBottom: 1
                            }}
                            placeholder="Nueva Entrada"
                            autoFocus
                            multiline
                            label="Nueva Entrada"
                            helperText={(touched && inputVale.length === 0) && "Ingrese una nueva entrada"}
                            value={inputVale}
                            onChange={handleTextChanged}
                            error={touched && inputVale.length === 0}
                            onBlur={() => setTouched(true)}
                            onFocus={() => setTouched(false)}
                        />
                        <Box display='flex' justifyContent='space-between'>
                            <Button
                                variant="text"
                                onClick={() => closeFormAddingTask()}
                            >Cancelar</Button>
                            <Button
                                variant="outlined"
                                color="secondary"
                                endIcon={<SaveIcon />}
                                onClick={handleSave}
                            >Guardar</Button>
                        </Box>
                    </>
                ) : (
                    <Button
                        variant="outlined"
                        fullWidth
                        endIcon={<AddCircleOutlineIcon />}
                        onClick={() => openFormAddingTask()}
                    >Agregar Tarea</Button>
                )
            }
        </Box>
    )
}

export default NewEntry;