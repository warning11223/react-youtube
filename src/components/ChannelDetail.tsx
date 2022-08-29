import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../store";
import {fetchChannelVideos, fetchVideos} from "../store/slices/videosSlice";
import {useParams} from "react-router-dom";
import {Box} from "@mui/material";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";
import Loading from "./Loading";

const ChannelDetail = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const { channelVideos, videos, status } = useAppSelector(state => state.videos);

    const items = channelVideos.items && channelVideos.items[0];
    const videoItems = videos.items;


    useEffect(() => {
        const params = `search?channelId=${id}&part=snippet&order=date`;

        dispatch(fetchVideos(params))
        dispatch(fetchChannelVideos(id!));
    }, [id]);



    return (
        <Box minHeight='95vh' bgcolor='#000' >
            <Box >
                <div style={{background: 'linear-gradient(90deg, rgba(0, 238, 247, 1) 0%, rgba(206, 3, 184, 1) 100%, rgba(0, 212, 255, 1) 100%)', zIndex: 10, height: 300}}>
                </div>
                <ChannelCard channel={items} marginTop={'-110px'} marginBottom={'50px'}/>
            </Box>
            {status === 'pending' ?
                <Box ml='170px' width='100vh' display='flex' flexDirection='column' justifyContent='flex-start' alignItems='flex-end'>
                    <Loading  />
                </Box> :
                <Videos videos={videoItems} direction={false}/>
            }
        </Box>
    );
};

export default ChannelDetail;
