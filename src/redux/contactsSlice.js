
import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContacts, deleteContact } from './fetchAPI';

const initialContactsState = {
    items: [],
    isLoading: false,
    error: null
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  extraReducers: (builder) => {
    builder
    .addCase(fetchContacts.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchContacts.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
      state.error = null;
    })
    .addCase(fetchContacts.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    })
    .addCase(addContacts.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(addContacts.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.items.push(payload);
      state.error = null;
    })
    .addCase(addContacts.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    })
    .addCase(deleteContact.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(deleteContact.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.items = state.items.filter(contact => contact.id !== payload.id);
      state.error = null;
    })
    .addCase(deleteContact.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    })
  }
});

export const contactReducer = contactSlice.reducer;
