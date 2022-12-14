import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Typography, Box, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Channel } from '../types/Channel';
import { Video } from '../types/Video';

import { Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

import ReactPlayer from 'react-player';

const VideoDetail = () => {
    const [videoDetail, setVideoDetail] = useState<Channel>();
    const [videos, setVideos] = useState<Video[]>([]);

    const { id } = useParams();

    useEffect( () => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
            .then((data) => setVideoDetail(data.items[0]));

        fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
            .then((data) => setVideos(data.items));
    }, [ id ]);

    return (
       <Box minHeight="95vh">
        <Stack direction={{ xs: 'column', md: 'row' }}>
            <Box flex={1}>
                <Box sx={{ width: '100%', position: 'sticky', top: '86px'}}>
                    <ReactPlayer
                        url={`https://www.youtube.com/watch?v=${id}`} 
                        className="react-player"
                        controls
                    />
                    <Typography color="white" variant="h6" fontWeight="bold" px={2} py={{ xl: 2, md: 0.6}}>
                        {videoDetail?.snippet.title}
                    </Typography>
                    <Stack 
                        direction="row" 
                        justifyContent="space-between"
                        alignItems={'center'}
                        sx={{ color: 'white' }}
                        py={1} px={2}
                        height="10px"
                        >
                            <Link to={`/channel/${videoDetail?.snippet.channelId}`}>
                                <Typography variant={'subtitle1'} color="white">
                                    {videoDetail?.snippet.channelTitle}
                                    <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }}/>
                                </Typography>
                            </Link>
                            <Stack direction="row" gap="20px" alignItems="center">
                                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                                    {parseInt(videoDetail?.statistics?.viewCount!).toLocaleString()} views
                                </Typography>
                                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                                    {parseInt(videoDetail?.statistics?.likeCount!).toLocaleString()} likes
                                </Typography>
                            </Stack>
                    </Stack>
                </Box>
            </Box>
            <Box px={2} py={{ md:1, xs: 5 }} justifyContent="center" alignItems="center">
                <Videos videos={videos} direction='column'/>
            </Box>
        </Stack>
       </Box>
    )
}

export default VideoDetail;