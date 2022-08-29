export type VideosItem = {
    id: {
        kind: string;
        videoId?: string;
        channelId?: string;
    }
    kind: string;
    snippet: {
        channelId: string;
        channelTitle: string;
        description: string;
        liveBroadcastContent: string;
        publishTime: string;
        publishedAt: string;
        thumbnails: any;
        title: string;
    },
    statistics?: any
}

export type VideosResponse = {
    items: VideosItem[];
    kind: string;
    nextPageToken: string;
    pageInfo: any,
    regionCode: string;
}

export type ChannelVideosItem = {
    brandingSettings?: any;
    id: {
        kind: string;
        videoId?: string;
        channelId?: string;
    };
    kind: string;
    snippet: {
        country: string;
        description: string;
        localized: any;
        publishedAt: string;
        thumbnails: any;
        title: string;
    };
    statistics: {
        hiddenSubscriberCount: boolean;
        subscriberCount: string;
        videoCount: string;
        viewCount: string;
    }
}

export type ChannelVideos = {
    items: ChannelVideosItem[];
    kind: string;
    pageInfo: {
        resultsPerPage: number;
        totalResults: number;
    }
}

export type SimilarVideosItem = {
    id: {
        kind: string;
        videoId: string;
            };
    kind: string;
    snippet: {
        channelId: string;
        channelTitle: string;
        description: string;
        liveBroadcastContent: string;
        publishTime: string;
        publishedAt: string;
        title: string;
        thumbnails: {
            default: any;
            high: any;
            maxres: any;
            medium: any;
            standart: any;
        }
    }

}

export type SimilarVideos = {
    items: SimilarVideosItem[];
    kind: string;
    nextPageToken: string;
    pageInfo: {
        resultsPerPage: number;
        totalResults: number;
    },
    regionCode: string;

}