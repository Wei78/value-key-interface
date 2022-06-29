import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Divider } from '@mui/material';

const KeyValueItem = (props: { itemKey: any, itemValue: any, type: any, id: string, onDelete: any }) => {

    return (
        <>
            <ListItem
                secondaryAction={
                    <IconButton
                        edge="end"
                        aria-label="delete"
                        sx={{
                            mr: 2,
                        }}>
                        <DeleteIcon onClick={props.onDelete} />
                    </IconButton>
                }
                sx={{
                    p: 2,
                    m: '0 auto',
                    width: '125ch',
                }}
            >
                <ListItemText
                    primary={props.itemKey}
                />
                <ListItemText
                    primary={props.itemValue}
                />

                <ListItemText
                    primary={props.type}
                />
            </ListItem>
            <Divider />
        </>
    )
}

export default KeyValueItem;