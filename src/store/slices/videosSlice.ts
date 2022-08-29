import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {options} from "../../utils/axios.options";
import axios from "axios";
import {
    ChannelVideos,
    ChannelVideosItem,
    SimilarVideos,
    SimilarVideosItem,
    VideosResponse
} from "../../models/type.models";

export interface VideosState {
    videos: VideosResponse;
    status: 'rejected' | 'pending' | 'fulfilled';
    channelVideos: ChannelVideos;
    similarVideos: SimilarVideos;
}

const initialState: VideosState = {
    videos: {
        items: [],
        kind: '',
        nextPageToken: '',
        pageInfo: {},
        regionCode: '',
    },
    channelVideos: {
        items: [],
        kind: '',
        pageInfo: {
            resultsPerPage: 0,
            totalResults: 0,
        }
    },
    similarVideos: {
        items: [],
        kind: '',
        nextPageToken: '',
        pageInfo: {
            resultsPerPage: 0,
            totalResults: 0,
        },
        regionCode: '',
    },
    status: 'pending',
}

export const videosSlice = createSlice({
    name: 'videos',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchVideos.fulfilled, (state, action: PayloadAction<VideosResponse>) => {
            state.videos = action.payload;
            state.status = 'fulfilled';
        });
        builder.addCase(fetchVideos.pending, (state, action) => {
            state.status = 'pending';
        });
        builder.addCase(fetchVideos.rejected, (state, action) => {
            state.status = 'rejected';
        });


        builder.addCase(fetchChannelVideos.fulfilled, (state, action: PayloadAction<ChannelVideos>) => {
            state.channelVideos = action.payload;
            state.status = 'fulfilled';
        });
        builder.addCase(fetchChannelVideos.pending, (state, action) => {
            state.status = 'pending';
        });
        builder.addCase(fetchChannelVideos.rejected, (state, action) => {
            state.status = 'rejected';
        });

        builder.addCase(fetchTheSimilarVideos.fulfilled, (state, action: PayloadAction<SimilarVideos>) => {
            state.similarVideos = action.payload;
            state.status = 'fulfilled';
        });
        builder.addCase(fetchTheSimilarVideos.pending, (state, action) => {
            state.status = 'pending';
        });
        builder.addCase(fetchTheSimilarVideos.rejected, (state, action) => {
            state.status = 'rejected';
        });

    },
})

export const fetchVideos = createAsyncThunk<VideosResponse, string>(
    'videos/fetchVideos',
    async (params: string) => {
        const { data } = await axios.get<VideosResponse>(`https://youtube-v31.p.rapidapi.com/${params}`, options)
        return data;
    }
)

export const fetchChannelVideos = createAsyncThunk<ChannelVideos, string>(
    'videos/fetchChannelVideos',
    async (id: string) => {
        const { data } = await axios.get<ChannelVideos>(`https://youtube-v31.p.rapidapi.com/channels?part=snippet&id=${id}`, options)
        return data;
    }
)

export const fetchTheSimilarVideos = createAsyncThunk<SimilarVideos, string>(
    'videos/fetchTheSimilarVideos',
    async (id: string) => {
        const { data } = await axios.get<SimilarVideos>(`https://youtube-v31.p.rapidapi.com/search?part=snippet&relatedToVideoId=${id}&type=video`, options);
        return data;
    }
)



export default videosSlice.reducer