import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

MaterialCommunityIcons.loadFont().catch(error => {
  console.info(error);
});

export const IconSizes = {
  small: 20,
  medium: 30,
  large: 40,
  extraLarge: 50,
};

export interface IconProps {
  size?: keyof typeof IconSizes;
  name: string;
  color?: string;
  style?: StyleProp<TextStyle>;
}

export const MIcon = React.memo(
  ({ size = 'medium', name, color, style }: IconProps) => (
    <MaterialCommunityIcons
      name={name}
      size={IconSizes[size]}
      color={color}
      style={style}
    />
  ),
);

const Icon = {
  MIcon,
};

export default Icon;
