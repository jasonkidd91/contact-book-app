# React Native Starter

This is a template for kickstarting a React Native project with common configurations and conventions. It includes integration of `Typescript`, `Redux`, `i18n`, `Axios`, `Theme`, `date-fns`, `React Navigation v6`, `Husky`, `Prettier`, and `ESLint`.

## Features

- `TypeScript`: A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
- `Redux`: State management library for handling global app state.
- `i18n`: Internationalization library for supporting multiple languages in the app.
- `Axios`: HTTP client for making API requests.
- `Theme`: Theme management for handling app theming.
- `React Navigation v6`: Navigation library for managing app navigation and routing.
- `date-fns`: Lightweight JavaScript library for working with dates.
- `Husky`: Git hooks library for running scripts on git actions.
- `Prettier`: Code formatter for maintaining consistent code style.
- `ESLint`: Linter for enforcing code quality and standards.
- `Jest`: A JavaScript testing framework built on top of Jasmine and maintained by Meta.

## Getting Started

To use this template, follow these steps:

```sh
npx react-native init MyApp --template https://github.com/jasonkidd91/react-native-starter
```

| RN Version |
| ---------- |
| 0.71       |

1. Install the dependencies using `npm` or `yarn`.
2. For ios, navigate to the ios directory and install the CocoaPods dependencies using `cd ios/ && pod install`.
3. For android, no additional steps are required for Android setup at the moment.
4. Start the development server using `npm start` or `yarn start`.
5. Run the app on a simulator or physical device using `react-native run-ios` or `react-native run-android`.
6. Customize the template by modifying the configurations and conventions to suit your project requirements.

After the app is created, you can start developing your app by editing the files in the `src/` directory according to your requirements.

Happy coding! 🚀🚀🚀

## Folder Structure

The folder structure of the project is as follows:

`src/`: Contains the source code for the React Native app.  
├ `assets/`: Contains static assets, such as images, fonts, and other resources.  
├ `components/`: Contains reusable components used throughout the app.  
├ `constants/`: Contains constant values used in the app.  
├ `hooks/`: Contains custom React hooks.  
├ `navigation/`: Contains navigation-related code, such as navigation stacks, routes, and navigators.  
├ `redux/`: Contains code related to redux state management.  
├ `screens/`: Contains individual screens or views of the app.  
├ `services/`: Contains code for handling external services or making API calls.  
├ `themes/`: Contains theme-related code, such as styles and color palettes.  
├ `translations/`: Contains files related to internationalization (i18n) and localization.  
├ `types/`: Contains type definitions used in the app.  
├ `utils/`: Contains utility functions and helpers used across the app.  
├ `App.tsx`: Entry point of the app.

`mock/`: Contains mock data and configurations for local development and testing purposes.  
├ `data/`: Contains JSON files with mock data for API responses.  

`__tests__/`: Contains tests for the app, such as unit tests, integration tests, and UI tests.  
├ `__mocks__/`: Contains mock implementations for external dependencies or modules.  
├ `setupTests.js`: Contains global configuration setup for the tests.  

`.env`: Contains custom configuration for the app.  
`.prettierrc`: Contains configuration for Prettier code formatter.  
`.eslintrc`: Contains configuration for ESLint.  
`.lintstagedrc`: Contains configuration for Lint-Staged.  

## Debugging with Flipper

Flipper is a powerful debugging tool that can be used to inspect, debug, and profile mobile apps. The project uses Flipper for debugging, which can be downloaded from [https://fbflipper.com/docs/getting-started/](https://fbflipper.com/docs/getting-started/).

### Installing Plugins

Once Flipper is installed, we can install additional plugins under the "Manage Plugins" in the toolbar. These plugins will enable us to debug:

- Install the `react-navigation` plugin to debug React Navigation.
- Install the `redux-debugger` plugin to debug Redux.

Note: Make sure to keep Flipper and the plugins up-to-date for the latest features and bug fixes.

For more information on Flipper and its features, please refer to the official documentation: https://fbflipper.com/docs/features/

Happy debugging with Flipper!

## Testing

This project uses [Jest](https://jestjs.io/) as the testing framework for unit and snapshot testing, and [react-test-renderer](https://reactjs.org/docs/test-renderer.html) for testing React components.

### Configuration

- To configure Jest for your project, you can modify the `jest.config.js` file in the root directory of your project.
- To set up any global setup or configuration for your tests, you can modify the `setupTests.js` file inside the `__tests__` folder of your project.
- To provide mock implementations for other dependencies, you can create your mock file under `__mocks__` folder which located inside the `__tests__` folder of your project.

### Useful CLI Commands

- Run all tests: npm test or yarn test
- Run tests in watch mode: npm test --watch or yarn test --watch
- Run tests with coverage report: npm test --coverage or yarn test --coverage
- Run tests with specific test file(s): npm test path/to/testFile.js or yarn test path/to/testFile.js
- Run tests with specific test name(s): npm test -t "testName" or yarn test -t "testName"
- Update snapshots: npm test -u or yarn test -u

You can also refer to the [Jest documentation](https://jestjs.io/docs/en/getting-started) for more information on configuring and running tests with Jest in a React Native project.

That's it! With this setup, you can start writing and running tests for your React Native project using jest and react-test-renderer. Happy testing!