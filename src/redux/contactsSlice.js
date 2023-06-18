import { createSlice } from "@reduxjs/toolkit";


// Slice принимает обьект
export const contactsSlice = createSlice({
// name: "addContacts, deleteContact.."то что отправляли при создании actions, чтобы видеть type
name: "contacts",
// createReducer(initialContacts первым параметром передается в Reducer, находится или отдельно или в том же файле...
initialState: {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  },
// сразу создаем редюсеры, не делаем отдельно
reducers:{
// сразу создаем action с названием addContacts и пишем логику reducer 
    addContacts: (state, action)=>{   state.contacts.push(action.payload);},

    
    // deleteContact: (state, action) => {   return state.filter((contact) => contact.id !== action.payload)  },
    deleteContact: (state, action) => {
        return {
          ...state,
          contacts: state.contacts.filter(
            contact => contact.id !== action.payload
          ),
        };
      },
    // getFilterValue: (state, action) => action.payload,
}
})

// export const getContacts = state => state.contacts;
export const getContacts = state => state.contacts.contacts;

// console.log('getContacts', getContacts)
// для работы actions создаем с нужными именами contactsSlice.actions

export const { addContacts, deleteContact } = contactsSlice.actions;

// для работы редюсера, создаем  contactsSlice.reducer;
export const contactsReducer = contactsSlice.reducer;

