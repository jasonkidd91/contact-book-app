import { Contact, ContactSection } from '../types/contacts';
import Contacts from 'react-native-contacts';
import { DATE_FORMATS, formatDate } from './DateUtils';

// Helper function to map device contact object to custom contact object
export const mapToCustomContact = (
  deviceContact: Contacts.Contact,
): Contact => {
  const customContact: Contact = {
    id: deviceContact.recordID || '',
    note: deviceContact.jobTitle ?? deviceContact.company ?? '',
    firstName: deviceContact.givenName ?? '',
    middleName: deviceContact.middleName ?? '',
    lastName: deviceContact.familyName ?? '',
    favorite: !!deviceContact.isStarred,
    dateOfBirth: deviceContact.birthday
      ? formatDate(
          new Date(
            deviceContact.birthday.year,
            deviceContact.birthday.month - 1,
            deviceContact.birthday.day,
          ),
          DATE_FORMATS.SHORT_DATE,
        )
      : '',
    phoneNumber: deviceContact.phoneNumbers?.[0]?.number ?? '',
    email: deviceContact.emailAddresses?.[0]?.email ?? '',
    address: deviceContact.postalAddresses?.[0]?.formattedAddress ?? '',
  };

  return customContact;
};

// Helper function to map contacts to contact section format
export const mapContactsToContactSection = (
  contacts: Contact[],
): ContactSection[] => {
  const sortedContacts = [...contacts].sort((a, b) => {
    // Extract first character of lastName and convert to uppercase
    const charA = a.lastName.charAt(0).toUpperCase();
    const charB = b.lastName.charAt(0).toUpperCase();

    // Categorize non-alphabet characters as '#'
    const categoryA = /^[A-Za-z]/.test(charA) ? charA : '#';
    const categoryB = /^[A-Za-z]/.test(charB) ? charB : '#';

    // Sort by category first, then by lastName
    if (categoryA < categoryB) {
      return -1;
    }
    if (categoryA > categoryB) {
      return 1;
    }
    if (a.lastName < b.lastName) {
      return -1;
    }
    if (a.lastName > b.lastName) {
      return 1;
    }
    return 0;
  });

  const output: ContactSection[] = [];
  let currentCategory = '';
  let currentData: Contact[] = [];

  // Loop through sorted contacts and group by category
  sortedContacts.forEach(contact => {
    const category = /^[A-Za-z]/.test(contact.lastName.charAt(0))
      ? contact.lastName.charAt(0).toUpperCase()
      : '#';

    if (category !== currentCategory) {
      // Push current data to output and start new category
      if (currentCategory !== '') {
        output.push({ title: currentCategory, data: currentData });
      }
      currentCategory = category;
      currentData = [];
    }

    // Push contact to current data
    currentData.push(contact);
  });

  // Push last category to output
  if (currentCategory !== '') {
    output.push({ title: currentCategory, data: currentData });
  }

  return output;
};

// Helper function to filter contacts by different properties
export const filterContacts = (
  contacts: Contact[],
  filterText: string,
): Contact[] => {
  // Convert filterText to lowercase for case-insensitive filtering
  const filter = filterText.toLowerCase();

  // Filter contacts based on different properties
  const filteredContacts = contacts.filter(
    contact =>
      contact.firstName.toLowerCase().includes(filter) || // Filter by firstName
      contact.middleName.toLowerCase().includes(filter) || // Filter by middleName
      contact.lastName.toLowerCase().includes(filter) || // Filter by lastName
      contact.phoneNumber.toLowerCase().includes(filter), // Filter by phoneNumber
  );

  return filteredContacts;
};
