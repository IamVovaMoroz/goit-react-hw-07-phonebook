

import { createSlice } from '@reduxjs/toolkit';

const initialFilterState = '';

export const filterSlice = createSlice({
name: 'filter',
initialState: { filterValue: initialFilterState },
reducers: {
setFilter: (state, action) => {
state.filterValue = action.payload;
},
},
});

export const getFilter = state => state.filter.filterValue;
export const { setFilter } = filterSlice.actions;
console.log('setFilter', setFilter)
export const filterReducer = filterSlice.reducer;

