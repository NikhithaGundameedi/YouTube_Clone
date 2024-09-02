import { Box } from '@mui/material';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Feed from './components/Feed';
import SearchFeed from './components/SearchFeed';
import Navbar from './components/Navbar';
import VideoDetail from './components/VideoDetail';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Box> 
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<Feed />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
