import { useState } from 'react';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const style = {
    width: 256,
    bgcolor: 'background.paper',
};

const TabDeleteInput = (props: { tabs: any, setTabs: any }) => {

    return (
        <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
                <div>
                    <IconButton
                        aria-label="delete"
                        size="medium"
                        {...bindTrigger(popupState)}
                        sx={{
                            position: 'absolute',
                            mt: -5.6,
                            ml: '112%',
                            bgcolor: '#486776',
                            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 3px 12px;',
                            color: '#f1f3db',
                            '&:hover': {
                                backgroundColor: '#4a7c94',
                                color: '#d7d8ae',

                            },
                        }}
                    >
                        <DeleteIcon />
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
                        <List sx={style} component="nav" aria-label="mailbox folders">
                            {props.tabs.map((item: any) => {
                                return (
                                    <>
                                        <ListItem button>
                                            <ListItemText primary={item} />
                                        </ListItem>
                                        <Divider />
                                    </>
                                )
                            })}

                        </List>
                    </Popover>
                </div>
            )}
        </PopupState>
    );
}

export default TabDeleteInput;