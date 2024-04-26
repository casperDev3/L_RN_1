import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { Product } from '../../../types';
import { EditText } from '../../../utils/EditText';

interface ProductCardProps {
  navigation: any;
  product: Product;
}

const ProductCard = ({navigation, product}: ProductCardProps) => {
  const {title, price, description, category, image, id } = product;
  return (
    <>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ProductDetail', {
            id
          })
        }>
        <View style={styles.card}>
          <Image
            source={{uri: image}}
            style={{width: 150, height: 150, objectFit: 'contain'}}
          />
          <View style={styles.card__info}>
            <Text>{title}</Text>
            <Text>{price} $</Text>
            <Text>{category}</Text>
            <Text>{EditText.cropText(description, 200)}</Text>
          </View>
        </View>
      </TouchableOpacity>
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
