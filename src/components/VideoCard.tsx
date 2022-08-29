import React from 'react';
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {VideosItem} from "../models/type.models";
import {demoChannelTitle, demoVideoTitle} from "../utils/constants";
import {Link} from "react-router-dom";
import {CheckCircle} from "@mui/icons-material";

type PropsType = {
    video: VideosItem
}

const VideoCard: React.FC<PropsType> = ({video}) => {
    return (
        <Card sx={{ width: {xs: '100%', md: 358}, height: 300, backgroundColor: '#1e1e1e' }}>
                <CardActionArea >
                    <Link to={`/video/${video?.id?.videoId}`}>
                        <CardMedia
                            component="img"
                            sx={{width: {sm: '100%', md: 358}, height: 180}}
                            image={video?.snippet?.thumbnails?.high?.url}
                            alt={video?.snippet?.title}
                        />
                    </Link>
                    <CardContent>
                        <Link to={`/video/${video?.id?.videoId}`}>
                            <Typography gutterBottom variant="subtitle1" color='#fff' fontWeight='bold'>
                                {video?.snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                            </Typography>
                        </Link>
                        <Link to={`/channel/${video?.snippet?.channelId}`}>
                            <Typography variant="subtitle2" fontWeight='bold'  color="gray" >
                                {video?.snippet?.channelTitle || demoChannelTitle}
                                <CheckCircle sx={{fontSize: 15, color: 'gray', ml: '5px' }} />
                            </Typography>
                        </Link>
                    </CardContent>
                </CardActionArea>
        </Card>
    );
};

export default VideoCard;
