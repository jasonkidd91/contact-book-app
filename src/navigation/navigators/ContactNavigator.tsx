import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ContactsScreen from '../../screens/Contact/ContactScreen';
import ContactDetailsScreen from '../../screens/Contact/ContactDetailsScreen';

const Stack = createStackNavigator();

const ContactNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ContactScreen" component={ContactsScreen} />
      <Stack.Screen
        name="ContactDetailsScreen"
        component={ContactDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default ContactNavigator;
