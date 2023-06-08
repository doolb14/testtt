import {View, Text, Image} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

const DetailsScreen = () => {
  //   We can fetch user details here inside useEffect
  const {
    params: {user},
  } = useRoute();
  return (
    <View>
      <Image
        style={{height: 120, width: 120}}
        source={{uri: user?.img || '<image-placeholder here>'}}
      />
      <Text>{user.firstname}</Text>
    </View>
  );
};

export default DetailsScreen;
