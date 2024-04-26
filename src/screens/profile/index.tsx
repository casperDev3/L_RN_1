import {View, Text, TouchableOpacity} from 'react-native';

const Profile = ({navigation}: any) => {
  return (
    <View>
      <Text>Profile</Text>
      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} />
    </View>
  );
};

export default Profile;
