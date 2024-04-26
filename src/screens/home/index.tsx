import {SafeAreaView, StyleSheet, TouchableOpacity, Text} from 'react-native';

const HomeScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Products')}>
        <Text style={styles.item}>Products</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.item}>Profile</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'red',
    justifyContent: 'center',
  },
  item: {
    padding: 10,
    fontSize: 32,
    height: 44,
    color: 'white',
  }
});

export default HomeScreen;
