import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from 'redux/contacts/operations';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { notifyConfigs } from 'config/notifyConfig';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    filter: '',
  },
  //change filter
  reducers: {
    changeFilterValue(state, action) {
      state.filter = action.payload;
    },
  },

  extraReducers: {
    // fetchContacts

    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload.reverse();
    },
    [fetchContacts.rejected]: handleRejected,

    //addContact
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.unshift(action.payload);
      Notify.success(
        `Contact  ${action.payload.name} added to phonebook`,
        notifyConfigs
      );
    },
    [addContact.rejected]: handleRejected,

    //delContact
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(
        contact => contact.id !== action.payload.id
      );

      Notify.info(
        `Contact  ${action.payload.name} deleted from phonebook`,
        notifyConfigs
      );
    },
    [deleteContact.rejected]: handleRejected,
  },
});

export const { changeFilterValue } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
