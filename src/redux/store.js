import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from 'redux/slice/contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
