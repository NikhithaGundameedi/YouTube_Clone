import { Card, CardMedia, CardContent, Typography, Checkbox } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { demoThumbnailUrl, demoChannelUrl, demoVideoUrl, demoVideoTitle, demoChannelTitle } from '../Assets/constants';

export default function VideoCard({ video: { id: { videoId }, snippet } }) {
  return (
    <Card   p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 1 }} 
    sx={{ width: { md: '320px', xs: '100%' }, borderRadius: 0, boxShadow: 'none', textDecoration:'none'    }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          sx={{ width: 358, height: 190 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: '#1e1e1e', height: '100px' }}>
        {/* Video Description */}
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} style={{textDecoration:"none"}}>
          <Typography  fontWeight="bold" color="#FFF" >
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        {/* Channel Name */}
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} style={{textDecoration:"none"}}>
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {snippet?.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)}
            {snippet?.channelId && (
              <CheckCircleIcon sx={{ color: 'gray', fontSize: 14, ml: '5px' }} />
            )}
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}
