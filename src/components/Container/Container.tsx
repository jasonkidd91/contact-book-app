import { useNavigation } from '@react-navigation/native';
import React, { PropsWithChildren } from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';

import { createThemedStyles } from '../../themes/ThemeUtils';
import Icon from '../Icon/Icon';
import { MIconNames } from '../../types';

type ContainerProps = {
  renderLeftAction?: JSX.Element;
  renderRightAction?: JSX.Element;
  renderSubHeader?: JSX.Element;
  showBackButton?: boolean;
} & (
  | { title: string; renderMiddleAction?: never }
  | { title?: never; renderMiddleAction?: JSX.Element }
);

// Render back action button
const BackButton = ({ onPress }: { onPress: () => void }) => {
  const styles = getStyles();
  return (
    <TouchableOpacity onPress={onPress} style={styles.backButtonContainer}>
      <Icon.MIcon name={MIconNames.CHEVRON_LEFT} size="small" />
      <Text>Back</Text>
    </TouchableOpacity>
  );
};

const Container = ({
  title,
  renderLeftAction,
  renderMiddleAction,
  renderRightAction,
  renderSubHeader,
  showBackButton,
  children,
}: PropsWithChildren<ContainerProps>) => {
  const navigation = useNavigation();
  const styles = getStyles();

  const onBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />

      {/* Header */}
      <View style={styles.headerContainer}>
        {/* Left Action */}
        <View style={styles.actionContainer}>
          {showBackButton ? <BackButton onPress={onBackPress} /> : null}
          {renderLeftAction}
        </View>
        {/* Middle Action */}
        {renderMiddleAction ? (
          <View style={styles.actionContainer}>{renderMiddleAction}</View>
        ) : (
          <Text style={styles.title}>{title}</Text>
        )}
        {/* Right Action */}
        <View style={styles.actionContainer}>{renderRightAction}</View>
      </View>

      {/* Subheader */}
      {renderSubHeader}

      <View style={styles.shadow} />

      {/* Main Content */}
      <View style={styles.contentContainer}>{children}</View>
    </View>
  );
};

const getStyles = createThemedStyles(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: theme.spacing.xs,
    paddingTop: theme.spacing.md,
    height: 58,
  },
  backButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 5,
  },
  title: {
    color: theme.colors.dark,
    fontSize: theme.fontSize.md,
    fontWeight: 'bold',
  },
  shadow: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.shadow,
    shadowColor: theme.colors.dark,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5, // For Android
    shadowRadius: 2, // For iOS
  },
  contentContainer: {
    flex: 1,
  },
}));

export default React.memo(Container);
