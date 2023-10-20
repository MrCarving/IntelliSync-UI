import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {
    return (
        <TextField
            variant='outlined'
            type="search"
            sx={{
                mx: 3,
                minWidth:"100px"
            }}
            InputProps={{
                
                startAdornment: (
                    <InputAdornment position="start">
                        <IconButton disableRipple sx={{ cursor: "default", p: 0, m: 0 }}>
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                ),
            }}
            inputProps={{
                style: {
                    height: "30px",

                    padding: 0,
                },
            }}
        />
    );
}

export default SearchBar;