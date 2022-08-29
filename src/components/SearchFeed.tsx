import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {Box, Typography} from "@mui/material";
import Videos from "./Videos";
import Stack from "@mui/material/Stack";
import {useAppDispatch, useAppSelector} from "../store";
import {fetchVideos} from "../store/slices/videosSlice";
import Loading from "./Loading";

const SearchFeed = () => {
    const { searchTerm } = useParams();
    const dispatch = useAppDispatch();
    const { videos, status } = useAppSelector(state => state.videos);

    const items = videos.items;

    useEffect(() => {
        const params = `search?part=snippet&q=${searchTerm}`;

        dispatch(fetchVideos(params))
    }, [searchTerm]);


    return (
        <Stack sx={{flexDirection: {sx: 'column', md: 'row'}, height: 'auto', backgroundColor: '#000'}}>
            <Box>
                <Typography variant='h4' fontWeight='bold' mb={2} sx={{color: 'white', ml: 2}}>
                    Search results for: <span style={{color: '#fc1503'}}>{searchTerm} </span>videos
                </Typography>

                {status === 'pending' ?
                    <Box ml='170px' width='100vh' display='flex' flexDirection='column' justifyContent='flex-start' alignItems='flex-end'>
                        <Loading  />
                    </Box>
                    : <Videos videos={items} direction={false}/>
                }
            </Box>
        </Stack>
    );
};

export default SearchFeed;
