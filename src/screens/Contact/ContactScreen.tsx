import React, { useCallback, useMemo, useState } from 'react';
import { View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import {
  filterContacts,
  mapContactsToContactSection,
} from '../../utils/ContactsUtils';
import { ContactListing, FavoriteContacts } from './components';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { Container, IconButton, Input } from '../../components';
import { ContactsParamList, MIconNames } from '../../types';
import { syncContacts } from '../../redux/reducers/contactsSlice';
import { createThemedStyles, useTheme } from '../../themes/ThemeUtils';

const ContactsScreen = ({
  navigation,
}: StackScreenProps<ContactsParamList, 'ContactScreen'>) => {
  const dispatch = useAppDispatch();
  const { contacts } = useAppSelector(state => state.contacts);
  const [search, setSearch] = useState('');
  const { colors } = useTheme();
  const styles = getStyles();

  const filteredData = useMemo(() => {
    if (contacts && contacts.length > 0) {
      if (search) {
        return filterContacts(contacts, search);
      } else {
        return contacts;
      }
    } else {
      return [];
    }
  }, [contacts, search]);

  const sectionData = useMemo(() => {
    return mapContactsToContactSection(filteredData);
  }, [filteredData]);

  const fetchContactData = useCallback(() => {
    dispatch(syncContacts());
  }, [dispatch]);

  return (
    <Container
      title="Contacts"
      renderSubHeader={
        <View style={styles.subHeaderContainer}>
          <Input
            placeholder="Search Contact"
            value={search}
            onChangeText={setSearch}
          />
        </View>
      }>
      <FavoriteContacts
        onPressItem={contact =>
          navigation.navigate('ContactDetailsScreen', contact)
        }
      />
      {contacts.length > 0 ? (
        // Render ContactLising with pull-to-refresh
        <ContactListing
          data={sectionData}
          onPressItem={contact =>
            navigation.navigate('ContactDetailsScreen', contact)
          }
        />
      ) : (
        // Render button to sync contact list
        <View style={styles.syncContainer}>
          <IconButton
            iconName={MIconNames.NOTEBOOK_PLUS}
            text="Sync Contact List"
            color={colors.error}
            onPress={fetchContactData}
          />
        </View>
      )}
    </Container>
  );
};

const getStyles = createThemedStyles(theme => ({
  subHeaderContainer: {
    paddingBottom: theme.spacing.xs,
    paddingHorizontal: theme.spacing.lg,
  },
  syncContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
  },
  buttonText: {
    marginTop: theme.spacing.sm,
  },
}));

export default ContactsScreen;
