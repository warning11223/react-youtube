import React from 'react';
import {Box, CardActionArea, CardMedia, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {demoProfilePicture} from "../utils/constants";
import {CheckCircle} from "@mui/icons-material";
import {ChannelVideosItem, VideosItem} from "../models/type.models";

type PropsType = {
    channel: VideosItem | ChannelVideosItem;
    marginTop?: string;
    marginBottom?: string;
}

const ChannelCard: React.FC<PropsType> = ({channel, marginTop, marginBottom}) => {

    return (
        <Box sx={{ width: {xs: '358px', md: 358}, height: 300, margin: 'auto', marginTop, marginBottom, boxShadow: 'none', borderRadius: '20px' , display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
            <CardActionArea sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 2, pt: '45px'}}>
                <Link to={`/channel/${channel?.id?.channelId}`}>
                    <CardMedia
                        image={channel?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                        sx={{borderRadius: '50%', height: '180px', width: '180px'}}
                    />
                    <Typography variant='h6' color='white'>
                        {channel?.snippet?.title}
                        <CheckCircle sx={{fontSize: 14, color: 'gray', ml: '5px', }}/>
                    </Typography>
                    {channel?.statistics?.subscriberCount &&
                        <Typography variant='h6' color='white'>
                            {parseInt(channel?.statistics?.subscriberCount).toLocaleString()} Subscribers
                        </Typography>
                    }
                </Link>
            </CardActionArea>
        </Box>
    );
};

export default ChannelCard;
