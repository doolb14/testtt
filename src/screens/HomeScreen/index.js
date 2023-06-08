import {View} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import UsersList from '../../components/complex/UsersList';
import ApiAxios from '../../utils/ApiAxios';
import {GET_USERS} from '../../constants/api';

const HomeScreen = () => {
  const [users, setUsers] = useState([]);
  const offset = useRef(0); // use state if you want to get all data in chunks automatically
  const items_count = useRef(50); // will be provided in api
  const getUsers = useCallback(() => {
    console.log('getting data');
    ApiAxios.get(GET_USERS, {offset: offset?.current}).then(resp => {
      setUsers(current_users => [
        ...current_users,
        ...resp.data.slice(offset.current, offset.current + 20),
      ]);
      offset.current = offset.current + 20;
    });
  }, []);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <View>
      <UsersList
        users={users}
        onLoadMore={getUsers}
        has_more_users={items_count > offset}
      />
    </View>
  );
};

export default HomeScreen;
