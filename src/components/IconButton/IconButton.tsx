import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon, { IconSizes } from '../Icon/Icon';

interface IconButtonProps {
  iconName: string;
  size?: keyof typeof IconSizes;
  text?: string;
  color?: string;
  onPress?: () => void;
}

const IconButton = ({
  iconName,
  size = 'medium',
  text,
  color,
  onPress,
}: IconButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon.MIcon name={iconName} size={size} color={color} />
      {text && <Text style={[styles.text, !!color && { color }]}>{text}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    marginTop: 10,
  },
});

export default React.memo(IconButton);
