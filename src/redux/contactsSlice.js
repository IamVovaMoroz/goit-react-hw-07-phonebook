// import { createSlice } from "@reduxjs/toolkit";
// // import axios from "axios";

// // const request = async () =>{

// //   const {data} = await axios('https://64887f460e2469c038fde023.mockapi.io/contacts')

// //   return data

// // }
// // console.log(request)

// // Slice принимает обьект
// export const contactsSlice = createSlice({
// // name: "addContacts, deleteContact.."то что отправляли при создании actions, чтобы видеть type
// name: "contacts",
// // createReducer(initialContacts первым параметром передается в Reducer, находится или отдельно или в том же файле...
// initialState: {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//   },
// // сразу создаем редюсеры, не делаем отдельно
// reducers:{
// // сразу создаем action с названием addContacts и пишем логику reducer 
//     addContacts: (state, action)=>{   state.contacts.push(action.payload);},

    
//     // deleteContact: (state, action) => {   return state.filter((contact) => contact.id !== action.payload)  },
//     deleteContact: (state, action) => {
//         return {
//           ...state,
//           contacts: state.contacts.filter(
//             contact => contact.id !== action.payload
//           ),
//         };
//       },
//     // getFilterValue: (state, action) => action.payload,
// }
// })

// // export const getContacts = state => state.contacts;
// export const getContacts = state => state.contacts.contacts;

// // console.log('getContacts', getContacts)
// // для работы actions создаем с нужными именами contactsSlice.actions

// export const { addContacts, deleteContact } = contactsSlice.actions;

// // для работы редюсера, создаем  contactsSlice.reducer;
// export const contactsReducer = contactsSlice.reducer;




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
