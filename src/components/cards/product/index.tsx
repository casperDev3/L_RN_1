import {View, Text, Image, StyleSheet} from 'react-native';

const ProductCard = () => {
  return (
    <>
      <View style={styles.card}>
        <Image
          source={{uri: 'https://via.placeholder.com/150'}}
          style={{width: 150, height: 150}}
        />
        <View style={styles.card__info}>
          <Text>Product Name</Text>
          <Text>Price</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    // flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginBottom: 10,
  },
  card__info: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
});

export default ProductCard;
