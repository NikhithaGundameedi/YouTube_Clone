import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack } from '@mui/material';
import CheckCircle from '@mui/icons-material/CheckCircle';
import Videos from './Videos';
import { fetchFromAPI } from '../Assets/FetchFromApi';
export default function VideoDetail() {
  const [videoDetail, setVideoDetail] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
 console.log(id);
  useEffect(() => {
    setLoading(true);
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => {
        if (data.items && data.items.length > 0) {
          setVideoDetail(data.items[0]);
        } else {
          console.error('No video details found');
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching video details:', error);
        setLoading(false);
      });
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => {
        if (data.items) {
          setRelatedVideos(data.items);
        }
      })
      .catch((error) => {
        console.error('Error fetching related videos:', error);
      });
  }, [id]);

  if (loading) return 'Loading...';
  if (!videoDetail) return 'Error loading video details.';

  const snippet = videoDetail.snippet || {};
  const statistics = videoDetail.statistics || {};
  const { title, channelId, channelTitle } = snippet;
  const { viewCount, likeCount } = statistics;

  const videoUrl = `https://www.youtube.com/watch?v=${id}`;
  console.log('Video URL:', videoUrl); // Debugging step to check the URL

  return (
    <Box minHeight="95vh" minWidth="60vw" >
      <Stack direction={{ xs: 'column', md:'row' }}>
        <Box  >
          <ReactPlayer url={videoUrl}
           className="react-player" 
           controls 
           height="600px"
           width="900px"
           />
          <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
            {title}
          </Typography>
          <Stack direction="row" justifyContent="space-between" sx={{ color: '#fff' }} py={1} px={2}>
            <Link to={`/channel/${channelId}`}>
              <Typography>
                {channelTitle}
                <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
              </Typography>
            </Link>
            <Stack direction="row" gap="20px" alignItems="center">
              <Typography variant="body1" sx={{ opacity: 0.7 }}>
                {viewCount} views
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.7 }}>
                {likeCount} likes
              </Typography>
            </Stack>
          </Stack>
        </Box>
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
          <Videos videos={relatedVideos} />
        </Box>
      </Stack>
    </Box>
  );
}
