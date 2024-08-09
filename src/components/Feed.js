import React, { useEffect, useState } from 'react';
import { Stack, Box, Typography } from '@mui/material';
import Sidenav from './Sidenav';
import Videos from './Videos';
import { fetchFromAPI } from '../Assets/FetchFromApi';

export default function Feed() {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchFromAPI(`part=snippet&q=${selectedCategory}&maxResults=50`)
      .then((data) => {
        setVideos(data.items || []); 
        setLoading(false);
      });
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { xs: "column", md: "row" } }}>
      <Box sx={{ height: { xs: "auto", md: "92vh", borderRight: '1px solid #3d3d3d', px: { xs: 0, md: 2 } }, color: "white" }}>
        <Sidenav
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}/>
        <Typography>
          Copyright 2022 JSM Media
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'red', gap: '2px' }}>
          {selectedCategory} <span style={{ color: '#fff' }}>Videos</span>
        </Typography>
        {loading ? <Typography>Loading...</Typography> : <Videos videos={videos} />}
      </Box>
    </Stack>
  );
}
