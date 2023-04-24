import { format, parse } from 'date-fns';

// Predefined date formats
export const DATE_FORMATS = {
  SHORT_DATE: 'dd/MM/yyyy',
  MEDIUM_DATE: 'dd MMM yyyy',
  LONG_DATE: 'dd MMMM yyyy',
};

// Predefined date-time formats
export const DATE_TIME_FORMATS = {
  SHORT_DATE_TIME: 'dd/MM/yyyy HH:mm',
  MEDIUM_DATE_TIME: 'dd MMM yyyy HH:mm',
  LONG_DATE_TIME: 'dd MMMM yyyy HH:mm',
};

// Function to format a date with a given format
export const formatDate = (date: Date, formatString: string): string => {
  return format(date, formatString);
};

// Function to parse a date from a string with a given format
export const parseDate = (dateString: string, formatString: string): Date => {
  return parse(dateString, formatString, new Date());
};
