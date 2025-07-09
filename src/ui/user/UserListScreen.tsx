import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useUsers } from '../../hooks/useUsers';

const UserListScreen = () => {
  const { users, loading, error } = useUsers();

  if (loading) return <ActivityIndicator />;
  if (error) return <Text>Error: {error}</Text>;

  return (
    <View>
      {users.map((user) => (
        <Text key={user.id}>{user.name} ({user.email})</Text>
      ))}
    </View>
  );
};

export default UserListScreen;