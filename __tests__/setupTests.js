// Mock any external dependencies used in the App component, such as react-native-safe-area-context, ErrorBoundary, and translations

jest.mock('redux-persist', () => {
  const real = jest.requireActual('redux-persist');
  return {
    ...real,
    persistReducer: jest
      .fn()
      .mockImplementation((config, reducers) => reducers),
  };
});

jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translation hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: str => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
  initReactI18next: {
    type: '3rdParty',
    init: jest.fn(),
  },
}));

jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => {
  return {
    loadFont: () => new Promise(() => {}),
  };
});

// Mock ThemeUtils
jest.mock('../src/themes/ThemeUtils', () => ({
  useTheme: jest.fn(),
  createThemedStyles: jest.fn(),
}));

// Mock ThemeProvider
jest.mock('../src/themes/ThemeProvider', () => {
  return {
    __esModule: true,
    default: jest.fn(({ children }) => {
      // Mock implementation of the ThemeProvider component
      return <div data-testid="mocked-theme-provider">{children}</div>;
    }),
  };
});

// Mock ThemeContext
jest.mock('../src/themes/ThemeContext', () => ({
  ThemeContext: jest.fn(),
}));
