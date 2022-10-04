import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilterValue = state => state.contacts.filter;

// export const selectVisibleContacts = state => {
//   const contacts = selectContacts(state);
//   const filterValue = selectFilterValue(state).trim().toLowerCase();
//   return contacts.filter(({ name }) =>
//     name.toLowerCase().includes(filterValue)
//   );
// };

//* memorized selector: is calculated only when changing contacts and filter value

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilterValue],
  (contacts, filter) => {
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
  }
);
