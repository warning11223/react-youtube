import React, {useEffect} from 'react';
import {Box, Typography} from "@mui/material";
import Stack from "@mui/material/Stack";
import ReactPlayer from "react-player";
import {Link, useParams} from "react-router-dom";
import {fetchTheSimilarVideos, fetchVideos} from "../store/slices/videosSlice";
import {useAppDispatch, useAppSelector} from "../store";
import {CheckCircle} from "@mui/icons-material";
import Videos from "./Videos";
import Loading from "./Loading";

const VideoDetail = () => {
    const {id} = useParams();
    const dispatch = useAppDispatch();
    const { videos, similarVideos, status } = useAppSelector(state => state.videos);

    const items = videos.items && videos.items[0];

    useEffect(() => {
        const params = `videos?part=snippet,statistics&id=${id}`;

        dispatch(fetchVideos(params));
        dispatch(fetchTheSimilarVideos(id!))
    }, [id]);


    return (
        <Box height='100vh' width='auto' bgcolor='#000' pt={1} >
            <Stack >
               <Box  justifyContent='space-between' gap={3} sx={{display: {sm: 'block', md: 'flex'}, }}>
                   <Box sx={{width: {sm: '100%', md: '80%'}, position: {sm: 'static', md: 'sticky'}, top: '86px'}}>
                       <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player' controls/>
                       <Typography variant='h5' color='#fff' fontWeight='bold' p={2} >
                           {items?.snippet?.title}
                       </Typography>
                       <Stack direction='row' display='flex' justifyContent='space-between' mr={4}>
                           <Stack direction='row' py={1} px={2}>
                               <Link to={`/channel/${items?.snippet?.channelId}`}>
                                   <Typography variant='subtitle1' color='gray' fontSize={17}>
                                       {items?.snippet?.channelTitle}
                                       <CheckCircle sx={{fontSize: 17, color: 'gray', ml: '5px', }}/>
                                   </Typography>
                               </Link>
                           </Stack>
                           <Stack direction='row' display='flex' gap={2}>
                               <Typography variant='body1' >
                                   {parseInt(items?.statistics?.viewCount).toLocaleString()} views
                               </Typography>
                               <Typography variant='body1' >
                                   {parseInt(items?.statistics?.likeCount).toLocaleString()} likes
                               </Typography>
                           </Stack>
                       </Stack>
                   </Box>

                   {status === 'pending' ?
                       <Box ml='170px' width='100vh' display='flex' flexDirection='column' justifyContent='flex-start' alignItems='flex-end'>
                           <Loading  />
                       </Box> :
                       <Box overflow='scroll' width='auto' height='100vh'>
                           <Videos videos={similarVideos?.items} direction/>
                       </Box>
                   }
               </Box>
            </Stack>


        </Box>
    );
};

export default VideoDetail;
