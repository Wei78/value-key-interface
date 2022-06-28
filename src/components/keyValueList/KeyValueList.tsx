import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import { Box, ListItem, ListItemText, Typography } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import KeyValueItem from '../keyValueItem/KeyValueItem';

const KeyValueList = (props: { data: any, onDelete: Function }) => {

    const text = {
        fontWeight: 'bold',
        color: '#f1f3db'
    };

    const elements = props.data.map((item: any) => {
        const { id, ...itemProps } = item;
        return (
            <KeyValueItem
                key={id}
                {...itemProps}
                onDelete={() => props.onDelete(id)}
            />
        )
    })

    return (
        <Box sx={{
            p: 2,
            pb: 8,
            width: '133ch',
            ml: 3,
            mt: 8,
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
            backgroundColor: '#fff'
        }}>
            <Grid item xs={12} md={6} mt={5}>

                <List>
                    <ListItem
                        sx={{
                            p: 2,
                            m: '0 auto',
                            width: '125ch',
                            backgroundColor: '#486776',
                            borderRadius: '5px'

                        }}
                    >
                        <ListItemText
                            primaryTypographyProps={{ style: text }}
                            primary='Key'
                            sx={{
                                ml: 2,
                            }}


                        />
                        <ListItemText
                            primaryTypographyProps={{ style: text }}
                            primary='Value'
                            sx={{
                                ml: 2,
                            }}
                        />

                        <ListItemText
                            primaryTypographyProps={{ style: text }}
                            primary='Type'
                            sx={{
                                ml: 2,
                            }}
                        />
                    </ListItem>
                    {elements}
                </List>
            </Grid>
            <Stack
                spacing={2}
                ml={'35%'}
                mt={5}
            >
                <Pagination count={10} shape="rounded" />
            </Stack>
        </Box >
    );
}

export default KeyValueList;