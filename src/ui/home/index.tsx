import * as React from 'react';
import { Button } from 'react-native';

export const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Go to UsersList"
      onPress={() => navigation.navigate('UserListScreen')}
    />
  );
};
