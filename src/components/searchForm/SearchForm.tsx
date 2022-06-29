import { Box } from '@mui/system';
import { TextField, Button, makeStyles } from '@mui/material';
import { useState } from 'react';
import './SearchForm.css';

const SearchForm = (props: { onUpdateSearch: Function }) => {
    const [term, setTerm] = useState('');

    const onUpdateSearch = (e: any) => {
        const term = e.target.value;
        setTerm(term);
        props.onUpdateSearch(term)
    }

    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            width: '100%',
            bgcolor: '#486776',
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 0px 15px',
            mb: 4,
            p: 2
        }}>
            <TextField
                id="outlined-basic"
                className="inputRounded"
                placeholder="Search..."
                variant="outlined"
                size="small"
                sx={{
                    width: '40ch',
                }}
                onChange={onUpdateSearch}
            />
        </Box>
    )
}

export default SearchForm;