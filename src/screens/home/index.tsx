import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
// import {SafeAreaProvider} from 'react-native-safe-area-context';
import ProductCard from '../../components/cards/product';

const HomeScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          {/* array 10 elements map */}
          {[...Array(10)].map((_, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate('ProductDetail')}>
              <ProductCard />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
});

export default HomeScreen;
