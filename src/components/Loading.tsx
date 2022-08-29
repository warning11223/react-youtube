import React from 'react';
import {Triangle} from "react-loader-spinner";
import {Box} from "@mui/material";

const Loading = () => {
    return (
            <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'flex-start'}}>
                <Triangle
                    height="200"
                    width="200"
                    color="#fc1503"
                    ariaLabel="triangle-loading"
                    wrapperStyle={{}}
                    visible={true}
                />
            </Box>

    );
};

export default Loading;
