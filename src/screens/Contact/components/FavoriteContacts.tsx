import React from 'react';
import { View, Text } from 'react-native';
import { useAppSelector } from '../../../redux/store';
import { Avatar } from '../../../components';
import { createThemedStyles } from '../../../themes/ThemeUtils';
import { FlatList } from 'react-native';
import { Contact } from '../../../types';

interface FavoriteContactsProps {
  onPressItem: (item: Contact) => void;
}

const FavoriteContacts = ({ onPressItem }: FavoriteContactsProps) => {
  const { favorites } = useAppSelector(state => state.contacts);
  const styles = getStyles();

  const renderItem = ({ item }: { item: Contact }) => (
    <Avatar
      key={item.id}
      subtitle={item.firstName}
      text={item.lastName}
      size="small"
      onPress={() => onPressItem(item)}
    />
  );

  return favorites.length > 0 ? (
    <View style={styles.container}>
      <Text style={styles.title}>Favourites</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
        data={favorites}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  ) : null;
};

const getStyles = createThemedStyles(theme => ({
  container: {
    backgroundColor: theme.colors.light,
    paddingVertical: theme.spacing.xs,
  },
  title: {
    fontSize: theme.fontSize.md,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: theme.spacing.md,
    marginHorizontal: theme.spacing.xs,
  },
  scrollViewContent: {
    flexDirection: 'row',
    gap: 18,
    paddingHorizontal: theme.spacing.md,
  },
}));

export default React.memo(FavoriteContacts);
