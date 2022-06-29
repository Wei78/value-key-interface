import { Box } from '@mui/system';
import { InputAdornment, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import './SearchForm.css';

const SearchForm = (props: { onUpdateSearch: Function }) => {
    // eslint-disable-next-line
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
            <Typography
                variant="h5"
                sx={{
                    color: '#f1f3db',
                }}
            >
                Configuration Manager
            </Typography>
            <TextField
                id="outlined-basic"
                className="inputRounded"
                placeholder="Search..."
                variant="outlined"
                size="small"
                sx={{
                    width: '40ch',
                    ml: 3,
                    "& .MuiOutlinedInput-root": {
                        "& > fieldset": {
                            border: '2px solid #4a7c94'
                        },
                    },
                }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
                onChange={onUpdateSearch}
            />
        </Box>
    )
}

export default SearchForm;