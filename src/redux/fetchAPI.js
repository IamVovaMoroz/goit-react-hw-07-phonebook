import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit'

axios.defaults.baseURL = "https://64902f411e6aa71680cac2b2.mockapi.io";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/contacts");
          
            return response.data          
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
  )

  export const addContacts = createAsyncThunk(
    "contacts/addContact",
    async (contactData, thunkAPI) => {
        try {
            const response = await axios.post("/contacts", contactData);
             
            return response.data          
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
  )

  export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`);
          
            return response.data          
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
  )