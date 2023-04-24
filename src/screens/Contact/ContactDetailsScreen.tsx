import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { toggleFavorite } from '../../redux/reducers/contactsSlice';
import { Avatar, Container, IconButton } from '../../components';
import { createThemedStyles } from '../../themes/ThemeUtils';
import { Contact, ContactsParamList } from '../../types';

const ContactDetailsScreen = ({
  route,
}: StackScreenProps<ContactsParamList, 'ContactDetailsScreen'>) => {
  const dispatch = useAppDispatch();
  const { contacts } = useAppSelector(state => state.contacts);
  const { id } = route.params as Contact;
  const [contact, setContact] = useState<Contact>();
  const styles = getStyles();

  const currentContact = useMemo(() => {
    return contacts.find(c => c.id === id);
  }, [id, contacts]);

  useEffect(() => {
    setContact(currentContact);
  }, [currentContact]);

  const handleToggleFavorite = useCallback(
    (favorite: boolean) => {
      dispatch(toggleFavorite({ id, favorite }));
    },
    [dispatch, id],
  );

  return (
    <Container
      showBackButton
      renderSubHeader={
        <View style={styles.subHeaderContainer}>
          <View style={styles.subHeaderInfo}>
            <Avatar
              text={contact?.lastName}
              title={contact?.firstName}
              subtitle={contact?.phoneNumber}
              size="large"
            />
          </View>
          <View style={styles.subHeaderAction}>
            <IconButton iconName="message-processing" text="Message" />
            <IconButton iconName="phone" text="Call" />
            <IconButton iconName="video" text="Video" />
            <IconButton iconName="email" text="Email" />
          </View>
        </View>
      }>
      <ScrollView style={styles.container}>
        <View style={styles.rowContainer}>
          <Text style={styles.rowText}>Mobile</Text>
          <Text style={styles.rowTextDesc}>{contact?.phoneNumber}</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.rowText}>Email</Text>
          <Text style={styles.rowTextDesc}>{contact?.email}</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.rowText}>Notes</Text>
          <Text style={styles.rowTextDesc}>{contact?.note}</Text>
        </View>
        <View style={styles.rowContainer}>
          {contact?.favorite ? (
            <TouchableOpacity onPress={() => handleToggleFavorite(false)}>
              <Text style={styles.rowText}>Remove Favorite</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => handleToggleFavorite(true)}>
              <Text style={styles.rowText}>Add to Favorite</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity>
            <Text style={styles.rowText}>Share Contact</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity>
            <Text style={styles.rowText}>Block Contact</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Container>
  );
};

const getStyles = createThemedStyles(theme => ({
  leftActionText: {
    fontSize: theme.fontSize.md,
    color: '#007AFF',
    paddingHorizontal: theme.spacing.md,
  },
  subHeaderContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: theme.spacing.xs,
  },
  subHeaderInfo: {
    marginBottom: theme.spacing.md,
  },
  subHeaderAction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: theme.spacing.xxl,
  },
  container: {
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.md,
  },
  rowContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#EAEAEA',
    paddingVertical: theme.spacing.xs,
    rowGap: 3,
  },
  rowText: {
    fontSize: theme.fontSize.md,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  rowTextDesc: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.secondary,
    justifyContent: 'center',
  },
}));

export default ContactDetailsScreen;
