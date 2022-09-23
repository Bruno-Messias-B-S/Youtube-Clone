export type Channel = {
    brandingSettings: {
        channel: {
            country: string,
            description: string,
            keywords: string,
            title: string,
            unsubscribedTrailer: string
        },
        image: { bannerExternalUrl: string }
    },
    contentDetails: {
        relatedPlaylists: { liked: string, uploads: string }
    },
    id: string,
    kind: string,
    snippet: {
        country: string
        customUrl: string
        description: string
        localized: { title: string, description: string }
        publishedAt: string,
        thumbnails: {
            default: { height: number, url: string, width: number },
            high: { height: number, url: string, width: number },
            medium: { height: number, url: string, width: number }
        }
        title: string
    },
    statistics: {
        hiddenSubscriberCount: boolean,
        subscriberCount: string,
        videoCount: string,
        viewCount: string
    }
}