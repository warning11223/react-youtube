import React, {useEffect, useState} from 'react';
import Stack from "@mui/material/Stack";
import {Box, Typography} from "@mui/material";
import Sidebar from "./Sidebar";
import {useAppDispatch, useAppSelector} from "../store";
import {fetchVideos} from "../store/slices/videosSlice";
import Videos from "./Videos";
import Loading from "./Loading";

const Feed = () => {
    const dispatch = useAppDispatch();
    const [selectedCategory, setSelectedCategory] = useState('New');
    const { videos, status } = useAppSelector(state => state.videos);

    const items = videos.items;

    useEffect(() => {
        const params = `search?part=snippet&q=${selectedCategory}`;
        dispatch(fetchVideos(params))
    }, [selectedCategory]);


    return (
        <Stack sx={{flexDirection: {sx: 'column', md: 'row'}, backgroundColor: '#000'}}>
            <Box position='fixed' sx={{ height: {sx: 'auto', md: '92vh'}, backgroundColor: '#000', borderRight: '1px solid #3d3d3d', px: {sx: 0, md: 2}, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', zIndex: 1000}}>
                <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
                <Typography className='copyright' variant='body2' sx={{color: '#fff', mb: 1}}>
                    Copyright 2022
                </Typography>
            </Box>
            {status === 'pending' ?
                <Box ml='170px' width='100vh' display='flex' flexDirection='column' justifyContent='flex-start' alignItems='flex-end'>
                    <Loading  />
                </Box> :
                <Box  sx={{ml: {sm: 0, md: '170px'}}} height='auto' >
                    <Typography variant='h4' fontWeight='bold' mb={2} sx={{color: 'white', ml: 2}}>
                        {selectedCategory} <span style={{color: '#fc1503'}}>videos</span>
                    </Typography>
                    <Videos videos={items} direction={false}/>
                </Box>

            }
        </Stack>
    );
};

export default Feed;
