// Custom Contact Object
export interface Contact {
  id: string;
  note: string;
  firstName: string;
  middleName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  phoneNumber: string;
  address: string;
  favorite: boolean;
}

// SectionList Object
export interface ContactSection {
  title: string;
  data: Contact[];
}

// Redux State
export type ContactState = {
  contacts: Contact[];
  favorites: Contact[];
  loading: boolean;
  error?: string | null;
};
