export type Video = {
    id: { kind: string, videoId: string, channelId: string },
    kind: string,
    snippet: { 
        channelId: string,
        channelTitle: string,
        description: string,
        liveBroadcasContent: string,
        publishTime: string,
        publishedAt: string,
        thumbnails: {
            default: { url: string, width: number },
            high: { url: string, width: number },
            medium: { url: string, width: number },
         },
        title: string
     }
}