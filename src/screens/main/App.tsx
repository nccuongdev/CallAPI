import {FlatList, Platform, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import ProductItem from '../../components/ProductItem';
import axios from 'axios';
import useFetchProducts from '../../api/fetchapi/useFetchProducts';
import getProductFromApi from '../../api/fetchapi/useFetchProducts';

export default function App() {
  const {data: products, fetchData} = getProductFromApi();

  useEffect(() => {
    fetchData();
  });

  return (
    <View style={styles.container}>
      <Text style={styles.headingTitle}>Danh sách sản phẩm</Text>
      <View style={styles.listItem}>
        <FlatList
          data={products}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <ProductItem
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              thumbnail={item.thumbnail}
              status={item.status}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF7FF',
  },
  headingTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4D869C',
    marginTop: Platform.OS === 'ios' ? 50 : 60,
    marginLeft: 20,
  },
  listItem: {
    marginTop: Platform.OS === 'ios' ? 10 : 20,
    marginBottom: 100,
  },
});
