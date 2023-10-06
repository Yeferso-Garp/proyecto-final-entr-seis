import { createSlice } from '@reduxjs/toolkit';

export const tracksSlice = createSlice({
    name: 'tracks',
    initialState: [],
    reducers: {
        setTracksSlice: (state, actions) => actions.payload,
        addTrack: (state, actions) => {
            if(state.findIndex(track => track.id === actions.payload.id) === -1) {
                return [ ...state, actions.payload ]
            } else {
                return state
            }
        },
        deleteTrack: (state, actions) => state.filter(Track => Track.id !== actions.payload.id)
    }
})

export const { setTracksSlice, addTrack, deleteTrack } = tracksSlice.actions;

export default tracksSlice.reducer;
