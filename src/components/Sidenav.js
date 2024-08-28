import React from 'react';
import { categories } from '../Assets/constants';
import { Box, Stack, Button, Typography } from '@mui/material';
export default function Sidenav({ selectedCategory, setSelectedCategory }) {
  return (
    <Stack  direction="row"
      sx={{ overflowY: "auto", height: { xs: "auto", md: "95%" }, flexDirection: {md: "column" }, textIndent: '20px' }}>
      {categories.map((category) => (
        <Button
          onClick={() => setSelectedCategory(category.name)}
          className="category-btn"
          sx={{
            backgroundColor: category.name === selectedCategory ? '#FC1503' : 'black',
            color: "white",
            gap: '20px',
            justifyContent: 'flex-start'
          }}
          key={category.name} >
          <span style={{ color: category.name === selectedCategory ? 'white' : 'red' }}> {category.icon} </span>
          <span> <Typography> {category.name}</Typography></span>
        </Button>
      ))}
    </Stack>
  );
}