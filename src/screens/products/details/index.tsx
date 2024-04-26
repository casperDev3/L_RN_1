import { FC } from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

const ProductDetails: FC = () => {
    //! init 
    const route = useRoute();
    const { id } = route.params as { id: string | number };
    return (
        <>
            <View>
                <Text>Product Details: {id}</Text>
            </View>
        </>
    );
};

export default ProductDetails;