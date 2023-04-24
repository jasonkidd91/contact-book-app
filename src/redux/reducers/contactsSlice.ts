import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Contacts from 'react-native-contacts';
import { ContactState } from '../../types/contacts';
import { mapToCustomContact } from '../../utils/ContactsUtils';

// Async thunk to fetch contact data
export const syncContacts = createAsyncThunk(
  'contacts/syncContacts',
  async () => {
    try {
      const granted = await Contacts.requestPermission();

      if (granted === 'authorized') {
        // Permission granted, fetch contacts from device
        const deviceContacts = await Contacts.getAll();
        const mappedContacts = deviceContacts.map(mapToCustomContact);
        return mappedContacts;
      } else {
        // Permission denied
        console.log('Contacts permission denied');
      }
    } catch (error) {
      console.error('Failed to fetch contacts', error);
      throw error;
    }
  },
);

// Define initial state
const initialState: ContactState = {
  contacts: [],
  favorites: [],
  loading: false,
  error: null,
};

// Define contacts slice
export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    clearContacts: state => {
      state.contacts = [];
      state.favorites = [];
    },
    toggleFavorite: (
      state,
      action: PayloadAction<{ id: string; favorite: boolean }>,
    ) => {
      const { id, favorite } = action.payload;

      state.contacts = state.contacts.map(contact => {
        if (contact.id === id) {
          return { ...contact, favorite };
        } else {
          return contact;
        }
      });

      if (favorite) {
        const targetContact = state.contacts.find(contact => contact.id === id);
        if (targetContact) {
          state.favorites = [...state.favorites, targetContact];
        }
      } else {
        state.favorites = state.favorites.filter(contact => contact.id !== id);
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(syncContacts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(syncContacts.fulfilled, (state, action) => {
        state.loading = false;
        const contacts = action.payload;
        if (contacts && contacts.length > 0) {
          state.contacts = contacts;
          state.favorites = contacts.filter(c => c.favorite);
        }
      })
      .addCase(syncContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export actions and reducer
export const { clearContacts, toggleFavorite } = contactSlice.actions;
export default contactSlice.reducer;
