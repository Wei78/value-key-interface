import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabAddInput from '../tabAddInput/TabAddInput';
import TabDeleteInput from '../tabDeleteInput/TabDeleteInput';

export default function KeyValueTabs() {
    const [value, setValue] = useState(0);
    const [tabs, setTabs] = useState([1, 2, 3, 5, 6, 7, 8]);

    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                bgColor: 'inerhit'
            }}
        >
            <Box
                sx={{
                    maxWidth: { xs: 320, sm: 620 },
                    bgcolor: '#486776',
                    borderTopLeftRadius: '15px',
                    borderTopRightRadius: '15px',
                    ml: 4,
                }}
            >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    {tabs.map((tab: any) => {
                        return <Tab
                            sx={{
                                color: '#f1f3db',
                                '&:focus': {
                                    backgroundColor: '#4a7c94',
                                    color: '#d7d8ae',

                                },
                            }}
                            label={`Page ${tab}`}
                        />
                    })}
                </Tabs>
            </Box>
            <TabAddInput tabs={tabs} setTabs={setTabs} />
            <TabDeleteInput tabs={tabs} setTabs={setTabs} />
        </Box>

    );
}