import React from 'react';
import Stack from "@mui/material/Stack";
import {VideosItem} from "../models/type.models";
import {Box} from "@mui/material";
import VideoCard from './VideoCard';
import ChannelCard from "./ChannelCard";

type PropsType = {
    videos: VideosItem[];
    direction: boolean;
}

const Videos: React.FC<PropsType> = ({videos, direction}) => {
    return (
        <Stack direction={direction ? 'column' : 'row'} flexWrap='wrap' justifyContent='center' gap={2} sx={{backgroundColor: '#000'}}>
            {
                videos && videos.map((item, index) => {
                    return (
                        <Box key={index}>
                            {item.id.videoId && <VideoCard video={item}/>}
                            {item.id.channelId && <ChannelCard channel={item}/>}
                        </Box>
                    )
                })
            }
        </Stack>
    );
};

export default Videos;
