import {useState, useEffect} from 'react';
import axios from 'axios';
import {api} from '../api';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  thumbnail: string;
  status: boolean;
  createdAt: number;
  modifiedAt: number;
}

// const useFetchProducts = () => {
//   const [data, setData] = useState<Product[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await axios.get(api.productURL);
//       setData(response.data);
//     };
//     fetchData();
//     console.log('Load Data');
//     return console.log('Clean');
//   }, []);

//   return {data};
// };

// const useFetchProducts = () => {
//   const [data, setData] = useState<Product[]>([]);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(api.productURL);
//       setData(response.data);
//     } catch (err) {}
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return {data};
// };

// const useFetchProducts = () => {
//   const [data, setData] = useState<Product[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(api.productURL);
//       const result = await response.json();
//       setData(result);
//     };

//     fetchData();
//   }, []);

//   return {data};
// };

const useFetchProducts = () => {
  const [data, setData] = useState<Product[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(api.productURL);
      setData(response.data);
    } catch (err) {}
  };

  return {data, fetchData};
};

export default useFetchProducts;
