import React, { useCallback, useRef } from 'react';
import {
  View,
  SectionList,
  Text,
  TouchableOpacity,
  SectionListData,
} from 'react-native';
import { useAppSelector } from '../../../redux/store';
import { Contact, ContactSection } from '../../../types';
import { Icon } from '../../../components';
import { createThemedStyles } from '../../../themes/ThemeUtils';

interface AlphabetListProps {
  data: ContactSection[];
  onPressItem: (item: Contact) => void;
  refreshControl?: JSX.Element;
}

const ContactListing = ({
  data,
  onPressItem,
  refreshControl,
}: AlphabetListProps) => {
  const { contacts } = useAppSelector(state => state.contacts);
  const sectionListRef = useRef<SectionList>(null);
  const styles = getStyles();

  const renderSectionHeader = ({
    section,
  }: {
    section: SectionListData<Contact>;
  }) => {
    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>{section.title}</Text>
      </View>
    );
  };

  const renderItem = ({ item }: { item: Contact }) => {
    return (
      <TouchableOpacity
        style={styles.contactItem}
        onPress={() => onPressItem(item)}>
        <Text>
          <Text style={styles.contactItemText}>
            {[item.firstName, item.middleName].join(' ')}{' '}
          </Text>
          <Text style={[styles.contactItemText, styles.contactItemLastName]}>
            {item.lastName}
          </Text>
        </Text>
      </TouchableOpacity>
    );
  };

  const handleSectionIndexSelect = useCallback(
    (index: number) => {
      if (sectionListRef.current) {
        sectionListRef.current.scrollToLocation({
          sectionIndex: index,
          animated: true,
          itemIndex: 0,
          viewOffset: 0,
          viewPosition: 0,
        });
      }
    },
    [sectionListRef],
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <View style={styles.headerTextContainer}>
          <Icon.MIcon
            name={'account-box-outline'}
            size="small"
            style={styles.headerText}
          />
          <Text style={styles.headerText}>All Contacts</Text>
        </View>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>{contacts.length} Entries</Text>
        </View>
      </View>

      {/* Alphabet Listing */}
      <View style={styles.alphabetListContainer}>
        <SectionList
          ref={sectionListRef}
          sections={data}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
          keyExtractor={item => item.id.toString()}
          stickySectionHeadersEnabled={false}
          showsVerticalScrollIndicator={true}
          refreshControl={refreshControl}
        />
        <View style={styles.alphabetContainer}>
          {data.map((section, index) => (
            <TouchableOpacity
              key={index}
              style={styles.alphabetItem}
              onPress={() => handleSectionIndexSelect(index)}>
              <Text style={styles.alphabetItemText}>{section.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const getStyles = createThemedStyles(theme => ({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.xs,
    paddingVertical: theme.spacing.xs,
  },
  headerTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  headerText: {
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
  alphabetListContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  sectionHeader: {
    backgroundColor: theme.colors.placeholder,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.xs,
  },
  sectionHeaderFixed: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  sectionHeaderText: {
    fontSize: theme.fontSize.md,
    fontWeight: 'bold',
    color: theme.colors.dark,
  },
  contactItem: {
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: '#EDEDED',
  },
  contactItemText: {
    fontSize: theme.fontSize.md,
    color: theme.colors.dark,
  },
  contactItemLastName: {
    fontWeight: 'bold',
  },
  alphabetContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'center',
  },
  alphabetItem: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
    width: 20,
  },
  alphabetItemText: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.secondary,
    fontWeight: 'bold',
  },
}));

export default React.memo(ContactListing);
