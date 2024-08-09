import React, { useState } from 'react';
import { TextField, IconButton, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
export default function SearchBar() {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      navigate(`/search/${searchValue}`);
      setSearchValue('');
    }
  };
  return (
    <div>
      <Paper
        component="form"
        sx={{
          borderRadius: 20,
          border: '1px solid #e3e3e3',
          mt:3,
          pl: 2,
          boxShadow: 'none',
          mr: { sm: 5 },
        }}
        onSubmit={handleSubmit}>
        <TextField style={{border:'none' , color:'red', }}
         sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              border: 'none',
            },
          },
          '& .MuiInputBase-input': {
            padding: '8px 0', 
          },
        }}
          placeholder="search..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}/>
        <IconButton type="submit" sx={{ p: '10px', color:  'red'}}>
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
}