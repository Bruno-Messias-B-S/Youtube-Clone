import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Video } from '../types/Video';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {
    
    const searchTerm = useParams();

    const [videos, setVideos] = useState<Video[]>([]);

    useEffect( () => {
        fetchFromAPI(`search?part=snippet&q=${searchTerm.searchTerm}`)
        .then((data) => setVideos(data.items))
    }, [ searchTerm ]);
    console.log(JSON.stringify(searchTerm))
    return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }}>
            Search Results for: <span style={{ color: '#F31503' }}> {searchTerm.searchTerm} </span> vídeos
        </Typography>

        <Videos videos={videos} direction="row"/>
    </Box>
)};

export default SearchFeed;