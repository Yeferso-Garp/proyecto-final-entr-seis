
import { createSlice } from '@reduxjs/toolkit';

export const credentialsSlice = createSlice({
    name: 'credentials',
    initialState: null,
    reducers: {
        setCredentialsSlice: (state, actions) => actions.payload
    }
})

export const { setCredentialsSlice } = credentialsSlice.actions;

export default credentialsSlice.reducer; // se coloca en la store, el que nos representa en la store.
