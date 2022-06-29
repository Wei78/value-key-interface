import { useState } from 'react';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';

const TabAddInput = (props: { tabs: any, setTabs: any }) => {
    const [tab, setTab] = useState('');

    const onTabChange = (e: any) => {
        setTab(e.target.value);
    }

    const AddTab = (newTab: any) => {
        props.setTabs([...props.tabs, newTab]);
        setTab('');
    }

    return (
        <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
                <div>
                    <IconButton
                        aria-label="delete"
                        size="medium"
                        {...bindTrigger(popupState)}
                        sx={{
                            ml: 1.5,
                            bgcolor: '#486776',
                            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 3px 12px;',
                            color: '#f1f3db',
                            '&:hover': {
                                backgroundColor: '#4a7c94',
                                color: '#d7d8ae',

                            },
                        }}
                    >
                        <AddIcon />
                    </IconButton>
                    <Popover
                        {...bindPopover(popupState)}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        <TextField
                            id="filled-basic"
                            label="Tab name..."
                            variant="filled"
                            onChange={onTabChange}
                        />
                        <Button
                            variant="contained"
                            sx={{
                                height: 56,
                                borderTopLeftRadius: 0,
                                borderBottomLeftRadius: 0,
                                backgroundColor: '#486776',
                                color: '#f1f3db',
                                fontWeight: 'bold',
                                '&:hover': {
                                    backgroundColor: '#4a7c94',
                                    color: '#f1f3db',

                                },
                            }}
                            onClick={() => AddTab(tab)}
                        >Add</Button>
                    </Popover>
                </div>
            )}
        </PopupState>
    );
}

export default TabAddInput;