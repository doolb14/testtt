import {FlatList} from 'react-native';
import React, {useCallback} from 'react';
import UserCard from '../../simple/UserCard';
import {useNavigation} from '@react-navigation/native';
import {DETAILS_SCREEN} from '../../../constants/screen_names';

const UsersList = ({users, onLoadMore, has_more_users, ...props}) => {
  const navigation = useNavigation();
  const onPressUserCard = useCallback(user => {
    navigation.navigate(DETAILS_SCREEN, {user: user});
  }, []);
  console.log(users);

  return (
    <FlatList
      {...props}
      data={users}
      renderItem={({item}) => (
        <UserCard user={item} onPressUserCard={onPressUserCard} />
      )}
      onEndReached={has_more_users ? onLoadMore : null}
    />
  );
};

export default UsersList;
