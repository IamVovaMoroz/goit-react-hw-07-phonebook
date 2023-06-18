import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit'

axios.defaults.baseURL = "https://64887f460e2469c038fde023.mockapi.io";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/contacts");
            // console.log('response.data', response.data)
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
                  console.log('addContacts', response.data)
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
            console.log('deleteContact', response.data)
            return response.data          
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
  )