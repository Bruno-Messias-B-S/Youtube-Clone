import { Stack, Box } from '@mui/material';
import { Video } from '../types/Video';
import { VideoCard, ChannelCard } from './';

type Props = {
    videos: Video[]
    direction: string
}

const Videos = ({ videos, direction }: Props) => {
    return (
        <Stack direction={ direction || 'row' } flexWrap="wrap" justifyContent="start" gap={2}>
            {videos.map( ( item, index ) => (
                <Box key={index}>
                    { item.id.videoId ? <VideoCard video={ item }/> : ''}
                    { item.id.channelId ? <ChannelCard channelDetail={ item }/> : ''}
                </Box>
            ))}
        </Stack>
    );
}

export default Videos