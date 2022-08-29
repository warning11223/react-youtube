import React from 'react';
import Stack from "@mui/material/Stack";
import {categories} from "../utils/constants";

type PropsType = {
    selectedCategory: string;
    setSelectedCategory: (name: string) => void
}

const Sidebar: React.FC<PropsType> = ({selectedCategory, setSelectedCategory}) => {


    return (
        <Stack  direction='row' sx={{overflowY: 'auto', height: {sx: 'auto', md: '95%'}, flexDirection: {md: 'column'}, }}>
            {categories.map((item, index) => {
                return (
                    <button
                        key={index}
                        className='category-btn'
                        style={{background: item.name === selectedCategory ? '#fc1503' : '', color: 'white'}}
                        onClick={() => setSelectedCategory(item.name)}
                    >
                        <span style={{color: item.name === selectedCategory ? 'white' : '#fc1503', marginRight: '15px'}}>{item.icon}</span>
                        <span style={{opacity: item.name === selectedCategory ? 1 : 0.8}}>{item.name}</span>
                    </button>
                )
            })}
        </Stack>
    );
};

export default Sidebar;
