import TypeSelect from '../typeSelect/TypeSelect';
import { Box, Button, Grid, Paper, styled, TextField } from '@mui/material';
import { useState } from 'react';

import './CreateForm.css'

const CreateForm = (props: { onAdd: Function }) => {
    const [itemKey, setKey] = useState('');
    const [itemValue, setValue] = useState('');
    const [type, setType] = useState('');

    const onKeyChange = (e: any) => {
        setKey(e.target.value);
    }

    const onValueChange = (e: any) => {
        setValue(e.target.value);
    }

    const onTypeChange = (e: any) => {
        setType(e.target.value);
    };

    const onSubmit = (e: any) => {
        e.preventDefault();
        props.onAdd(itemKey, itemValue, type);
        setKey('');
        setValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <Box p={1}>
                <TextField
                    id="outlined-basic"
                    label="Key"
                    variant="outlined"
                    sx={{ width: '40ch', pb: 3 }}
                    InputLabelProps={{
                        style: {
                            ...({ top: `${-2}px` }),
                        },
                    }}
                    inputProps={{
                        style: {
                            height: 50,
                            padding: '0 5px',
                        },
                    }}
                    value={itemKey}
                    onChange={onKeyChange}
                />
                <TextField
                    id="outlined-basic"
                    label="Value"
                    variant="outlined"
                    sx={{ width: '40ch' }}
                    InputLabelProps={{
                        style: {
                            ...({ top: `${-2}px` }),
                        },
                    }}
                    inputProps={{
                        style: {
                            height: 50,
                            padding: '0 5px',
                        },
                    }}
                    value={itemValue}
                    onChange={onValueChange}
                />
            </Box>
            <TypeSelect type={type} onTypeChange={onTypeChange} />
            <Button
                sx={{
                    height: 45,
                    width: '13ch',
                    ml: 1,
                    mt: 2,
                    backgroundColor: '#486776',
                    color: '#f1f3db',
                    fontWeight: 'bold',
                    '&:hover': {
                        backgroundColor: '#4a7c94',
                        color: '#f1f3db',

                    },
                }}
                variant='contained'
                type='submit'
            >
                Create
            </Button>
        </form>
    )
}

export default CreateForm;