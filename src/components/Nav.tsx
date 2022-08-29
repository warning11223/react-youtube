import Stack from '@mui/material/Stack';
import React from 'react';
import {logo} from '../utils/constants'
import {Link} from "react-router-dom";
import SearchBar from "./SearchBar";


const Nav = () => {
    return (
        <Stack direction="row" spacing={2} p={2} sx={{backgroundColor: '#000', position: 'sticky', top: 0, justifyContent: 'space-between',  zIndex: 50}}>
            <Link to='/'>
                <img height={45} src={logo} alt="logo"/>
            </Link>
            <SearchBar />
        </Stack>
    );
};

export default Nav;
