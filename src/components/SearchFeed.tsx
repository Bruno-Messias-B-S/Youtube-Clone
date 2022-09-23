import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Video } from '../types/Video';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {

    type Search = {
        searchTerm: string
    }

    const searchTerm = useParams();

    const [videos, setVideos] = useState<Video[]>([]);

    useEffect( () => {
        fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
        .then((data) => setVideos(data.items))
    }, [ searchTerm ]);

    return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }}>
            Search Results for: <span style={{ color: '#F31503' }}> <> { searchTerm } </> </span> vídeos
        </Typography>

        <Videos videos={videos}/>
    </Box>
)};

export default SearchFeed;