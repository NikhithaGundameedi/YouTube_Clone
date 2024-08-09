import React from 'react';
import { Typography , Stack, Box} from '@mui/material';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';
const Videos = ({ videos }) => {
  console.log(videos);

  return (
    <Stack direction="row" flexWrap="wrap" gap={2} justifyContent="flex-start" >
      {
                videos.map((item, index)=>(
               <Box key={index}>
                {item.id && item.id.videoId && <VideoCard video={item} />}
                 {item.id && item.id.channelId && <ChannelCard channelDetail={item} />}               
               </Box>   
         ))};
    </Stack>
  );
};

export default Videos;
