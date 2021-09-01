import React from 'react';
import {View, FlatList} from 'react-native';
import feed from '../assets/data/feed';
import Post from '../components/Post';

const SearchResults = () => {
  const renderItem = ({item}) => {
    return <Post post={item} />;
  };
  return (
    <View>
      <FlatList data={feed} renderItem={renderItem} />
    </View>
  );
};

export default SearchResults;
