import React from 'react';
import {useEffect , useState} from 'react';
import { Box } from '@mui/material';
import {useParams} from 'react-router-dom';
import {ChannelCard, videos} from './'
import Videos from './Videos';

export default function ChannelDetail() {
  const {id}=useParams(); 
  const[channelDetail, setchannelDetail] =useState([]);
  const[videos, setvideos]=useState([]);

  useEffect(()=>{

    fetchFromAPI('channel?part=snippet&id=${id}').then((data)=>setchannelDetail(data?.items[0]));

    fetchFromAPI('search?part=snippet&order=date').then((data)=>setvideos(data?.items));
  },[id])
  return (
    <Box minHeight="95vh">
    <Box>
      <div  style={{
        background:'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3184,1)  100%, rgba(0,212,255,1) 100%',
        zIndex:'10',
        height:'300px'
      }}/>
      <ChannelCard channelDetail={channelDetail} marginTop="-110px"/>
    </Box>

    <Box display="flex" p="2">
         <Box sx={{mr:{sm:'100px'}}}/>   
            <Videos videos={videos}/>
    </Box>
    </Box>
  )
}
