import React, { PropsWithChildren, isValidElement } from 'react';
import { ErrorInfo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type ErrorBoundaryProps = PropsWithChildren<{
  FallbackComponent?: JSX.Element;
  onError?: (error: Error, info: { componentStack: string }) => void;
}>;

type ErrorBoundaryState = { hasError: boolean };

const initialState: ErrorBoundaryState = {
  hasError: false,
};

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state = initialState;

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    this.props.onError?.(error, info);
  }

  render() {
    const { FallbackComponent } = this.props;

    if (this.state.hasError) {
      if (isValidElement(FallbackComponent)) {
        return FallbackComponent;
      }
      return (
        <View style={styles.container}>
          <View style={styles.messageContainer}>
            <Text style={styles.messageText}>Oops! Something went wrong.</Text>
          </View>
        </View>
      );
    }

    return this.props.children;
  }
}

// Define styles
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  messageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ff0000', // Replace with your desired background color for error message
    borderRadius: 8,
  },
  messageText: {
    color: '#ffffff', // Replace with your desired text color for error message
    fontSize: 18,
    textAlign: 'center',
  },
});

export default ErrorBoundary;
