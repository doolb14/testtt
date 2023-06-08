import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const UserCard = ({user, onPressUserCard, ...props}) => {
  return (
    <TouchableOpacity onPress={() => onPressUserCard(user)}>
      <View>
        <Text>{user?.firstname}</Text>
        <Text>{user?.age}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default UserCard;
