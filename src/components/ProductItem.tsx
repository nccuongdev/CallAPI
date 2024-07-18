import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

interface Props {
  name: string;
  price: number;
  quantity: number;
  thumbnail: string;
  status: boolean;
}

const ProductItem = (props: Props) => {
  const {name, price, quantity, thumbnail} = props;

  return (
    <View style={styles.itemContainer}>
      <Image style={styles.imageThumnail} source={{uri: thumbnail}} />
      <View style={styles.textContainer}>
        <View style={styles.header}>
          <Text style={styles.productName}>{name}</Text>
        </View>
        <Text style={styles.productPrice}>{price} đ</Text>
        <Text style={styles.productQuatity}>Số lượng: {quantity}</Text>
        <View style={{marginTop: 10}}>
          <TouchableOpacity style={styles.buttonAddCart}>
            <Text style={styles.buttonText}>Thêm vào giỏ hàng</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  itemContainer: {
    padding: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    backgroundColor: '#CDE8E5',
    marginHorizontal: 20,
    borderRadius: 10,
    marginVertical: 10,
  },
  imageThumnail: {
    height: 100,
    width: 100,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textContainer: {
    flex: 1,
    marginLeft: 20,
    //    / backgroundColor: '#FFF',
  },
  buttonAddCart: {
    padding: 2,
    backgroundColor: '#4D869C',
    width: '60%',
    borderRadius: 8,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#FFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewMoreText: {
    fontSize: 10,
  },
  productPrice: {
    fontSize: 18,
    color: 'red',
  },
  productQuatity: {
    fontSize: 12,
  },
});
