import React from 'react';
import { Box, CardContent, CardMedia, Card, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { demoProfilePicture } from '../Assets/constants';

export default function ChannelCard({ channelDetail, marginTop }) {
  return (
    <Box sx={{
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: { xs: '356px', md: '320px' },
      height: '326px',
      margin: 'auto',
      marginTop:'marginTop',
    }}>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <Card sx={{ width: '100%', height: '100%', boxShadow: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <CardMedia
            image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            sx={{ width: '180px', height: '180px', borderRadius: '50%', border: '1px solid #e3e3e3', mb: 2 }}
          />
          <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
            <Typography variant="subtitle2" fontWeight="bold" color="gray">
              {channelDetail?.snippet?.title.slice(0, 60)}
              <CheckCircleIcon sx={{ color: 'gray', fontSize: 16, ml: '5px' }} />
            </Typography>
            {channelDetail?.statistics?.subscriberCount && (
              <Typography>
                {parseInt(channelDetail.statistics.subscriberCount).toLocaleString()} Subscribers
              </Typography>
            )}
          </CardContent>
        </Card>
      </Link>
    </Box>
  );
}
