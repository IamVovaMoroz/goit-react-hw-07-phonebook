import { filterReducer } from './filtersSlice';
import { contactReducer } from './contactsSlice';
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
  },
});











