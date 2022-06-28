import { Box } from '@mui/system';
import { TextField, Button, makeStyles } from '@mui/material';
import { useState } from 'react';

const SearchForm = (props: { onUpdateSearch: Function }) => {
    const [term, setTerm] = useState('');

    const onUpdateSearch = (e: any) => {
        const term = e.target.value;
        setTerm(term);
        props.onUpdateSearch(term)
    }

    return (
        <Box sx={{
            position: 'absolute',
            width: 345,
            height: 80,
            ml: '75%',
            mt: -13,
            pl: 2,
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
            backgroundColor: '#fff'

        }}>
            <TextField
                id="outlined-basic"
                label="Search by name..."
                variant="outlined"
                sx={{ width: '30ch', mt: 2 }}
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
                onChange={onUpdateSearch}
            />
            <Button
                sx={{
                    height: 50,
                    width: '9ch',
                    ml: 2,
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
                OK
            </Button>
        </Box>
    )
}

export default SearchForm;