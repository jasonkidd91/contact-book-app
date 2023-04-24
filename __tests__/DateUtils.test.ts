import { formatDate, parseDate, DATE_FORMATS } from '../src/utils/DateUtils';
import { format, parse } from 'date-fns';

describe('Date Utility Functions', () => {
  const testDate = new Date('2022-01-01T12:34:56.789Z');

  describe('formatDate', () => {
    test('should format date correctly with given format', () => {
      const formattedDate = formatDate(testDate, DATE_FORMATS.SHORT_DATE);
      const expected = format(testDate, DATE_FORMATS.SHORT_DATE);
      expect(formattedDate).toBe(expected);
    });
  });

  describe('parseDate', () => {
    test('should parse date correctly from string with given format', () => {
      const dateString = '01/01/2022';
      const parsedDate = parseDate(dateString, DATE_FORMATS.SHORT_DATE);
      const expected = parse(dateString, DATE_FORMATS.SHORT_DATE, new Date());
      expect(parsedDate).toEqual(expected);
    });
  });
});
