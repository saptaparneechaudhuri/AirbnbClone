import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  StatusBar,
} from 'react-native';

const days = 7;

const Post = ({post}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      {/* Image */}
      <Image style={styles.image} source={{uri: post.image}} />
      {/* Bed  */}
      <Text style={styles.bedrooms}>
        {post.bed} bed {post.bedroom} bedroom
      </Text>
      {/* Type and Description */}
      <Text style={styles.description} numberOfLines={2}>
        {post.type}. {post.title}
      </Text>
      {/* Old proce and new price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${post.oldPrice}</Text>
        <Text style={styles.newPrice}> ${post.newPrice} </Text>
        /night
      </Text>

      {/* Total Price */}
      <Text style={styles.totalPrice}>${post.newPrice * days}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  bedrooms: {
    marginVertical: 10,
    color: '#5b5b5b',
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
  },
  prices: {
    fontSize: 18,
    marginVertical: 10,
  },
  oldPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'line-through',
  },
  newPrice: {
    fontWeight: 'bold',
  },
  totalPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'underline',
  },
});

export default Post;
