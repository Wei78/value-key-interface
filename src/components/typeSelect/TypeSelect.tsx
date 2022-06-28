import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import types from '../../data/types';

export default function TypeSelect(props: { type: any, onTypeChange: any }) {

    const menuTypes = types.map(item => {
        return <MenuItem value={item.type} key={item.id}>{item.type}</MenuItem>
    })

    return (
        <Box sx={{ width: '25ch' }} p={1} pt={2}>
            <FormControl fullWidth>
                <InputLabel
                    id="demo-simple-select-label"
                >
                    Type
                </InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={props.type}
                    label="Type"
                    onChange={props.onTypeChange}
                >
                    {menuTypes}
                </Select>
            </FormControl>
        </Box>
    );
}