import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import Videos from './Videos';
import { fetchFromAPI } from '../Assets/FetchFromApi';
export default function SearchFeed() {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetchFromAPI(`part=snippet&q=${searchTerm}&maxResults=50`)
      .then((data) => {
        setVideos(data.items || []);
        setLoading(false);
        console.log(videos);
        console.log(searchTerm);
      });
  }, [searchTerm]); 
  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2, backgroundColor:'black'  }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white', gap: '3px' }}>
        You Searched For:<span style={{ color: '#F31503' }}> {searchTerm} </span>
      </Typography>
      {loading ? <Typography>Loading...</Typography> : <Videos videos={videos} />}
    </Box>
  );
}