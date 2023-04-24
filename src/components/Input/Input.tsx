import React, { forwardRef } from 'react';
import { Platform, TextInput, View } from 'react-native';
import { createThemedStyles } from '../../themes/ThemeUtils';

interface IInputProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  disabled?: boolean;
  style?: object;
}

const Input = forwardRef<TextInput, IInputProps>(
  (
    { placeholder, value, onChangeText, secureTextEntry, disabled, style },
    ref,
  ) => {
    const styles = getStyles();

    return (
      <View style={[styles.inputContainer, style]}>
        <TextInput
          ref={ref}
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          editable={!disabled}
          autoCorrect={false}
          autoCapitalize="none"
          spellCheck={false}
          keyboardAppearance="dark"
        />
      </View>
    );
  },
);

const getStyles = createThemedStyles(theme => ({
  inputContainer: {
    backgroundColor: theme.colors.placeholder,
    borderRadius: 8,
    paddingHorizontal: theme.spacing.xs,
    height: Platform.OS == 'ios' ? 30 : 50,
  },
  input: {
    flex: 1,
    fontSize: theme.fontSize.md,
    color: theme.colors.text,
  },
}));

export default React.memo(Input);
