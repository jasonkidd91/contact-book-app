import React from 'react';
import { View, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createThemedStyles } from '../../themes/ThemeUtils';

type AvatarProps = {
  size?: 'small' | 'medium' | 'large';
  title?: string;
  subtitle?: string;
  backgroundColor?: string;
  onPress?: () => void;
} & ({ text: string; imageUri?: never } | { text?: never; imageUri?: string });

const Avatar = ({
  size = 'medium',
  text,
  imageUri,
  title,
  subtitle,
  backgroundColor = '#c7c7c7',
  onPress,
}: AvatarProps) => {
  const styles = getStyles();
  const sizes = {
    small: 40,
    medium: 60,
    large: 80,
  };
  const borderRadius = sizes[size] / 2;

  const renderInitials = () => {
    let initials = '?';
    if (text && text.length >= 2) {
      initials = text.substring(0, 2);
    } else if (text && text.length === 1) {
      initials = text;
    }

    return <Text style={styles.initials}>{initials.toUpperCase()}</Text>;
  };

  const renderImage = () => (
    <Image
      source={{ uri: imageUri }}
      style={[
        styles.image,
        { width: sizes[size], height: sizes[size], borderRadius },
      ]}
    />
  );

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View
        style={[
          styles.circleContainer,
          {
            width: sizes[size],
            height: sizes[size],
            borderRadius,
            backgroundColor,
          },
        ]}>
        {imageUri ? renderImage() : renderInitials()}
      </View>
      {title && <Text style={styles.title}>{title}</Text>}
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </TouchableOpacity>
  );
};

const getStyles = createThemedStyles(theme => ({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
  },
  circleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'cover',
  },
  title: {
    fontSize: theme.fontSize.md,
    color: theme.colors.text,
  },
  subtitle: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.dark,
  },
  initials: {
    fontSize: theme.fontSize.lg,
    fontWeight: '600',
    color: theme.colors.light,
  },
}));

export default React.memo(Avatar);
