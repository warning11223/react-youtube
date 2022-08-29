import React, {ChangeEvent, useState} from 'react';
import {IconButton, Paper} from "@mui/material";
import {Search} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";

const SearchBar = () => {
    const [value, setValue] = useState('');

    const navigate = useNavigate();

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const submitHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();
        navigate(`/search/${value}`)
        setValue('')
    }

    return (
        <Paper
            component='form'
            sx={{borderRadius: 20, border: '1px solid #e3e3e3', pl: 2, boxShadow: 'none', mr: { sm: 5},}}
            onSubmit={submitHandler}
        >
            <input
                type="text"
                className='search-bar'
                placeholder='Search...'
                value={value}
                onChange={inputHandler}
            />
            <IconButton type='submit' sx={{p: '10px', color: 'red'}}>
                <Search />
            </IconButton>
        </Paper>
    );
};

export default SearchBar;
