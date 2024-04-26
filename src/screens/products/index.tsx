import {View, TouchableOpacity, ScrollView} from 'react-native';
import ProductCard from '../../components/cards/product';
import {useEffect, useState} from 'react';
import api from '../../libs/api';
import {Product} from '../../types';

interface ProductsProps {
  navigation: any;
}

const Products = ({navigation}: ProductsProps) => {
  //! states
  const [products, setProducts] = useState<Product[] | []>([]);
  //! load
  useEffect(() => {
    api.getData('/products', false, {}).then((data: Product[]) => {
      setProducts(data);
    });
  }, []);
  return (
    <>
      <ScrollView scrollEventThrottle={16}>
        <View>
          {products.map((product: Product, index: number) => (
            <ProductCard
              key={index}
              navigation={navigation}
              product={product}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default Products;
