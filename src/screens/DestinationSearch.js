import React, {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Pressable,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import search from '../assets/data/search';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const DestinationSearch = ({navigation}) => {
  const [inputText, setInputText] = useState('');
  const renderItem = ({item}) => {
    return (
      <Pressable
        style={styles.row}
        onPress={() => navigation.navigate('Guests')}>
        <View style={styles.iconContainer}>
          <Entypo name="location-pin" size={30} />
        </View>
        <Text style={styles.locationText}>{item.description}</Text>
      </Pressable>
    );
  };
  return (
    <View style={styles.container}>
      {/* Input Component */}
      <View style={{height: 500}}>
        <GooglePlacesAutocomplete
          placeholder="Where are you going?"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          // styles={{textInput: styles.textInput}}
          query={{
            key: 'AIzaSyB1BKU9BU5X8oPmHIL5nivR0TVmqjGf2kA',
            language: 'en',
          }}
          // renderRow={renderItem}
        />
      </View>

      <TextInput
        style={styles.textInput}
        placeholder="Text Input?"
        onChangeText={text => setInputText(text)}
      />

      {/* List of destination */}
      <FlatList data={search} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: '100%',
    backgroundColor: 'white',
  },
  textInput: {
    fontSize: 20,
    marginBottom: 20,
    marginTop: 50,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  iconContainer: {
    backgroundColor: '#e7e7e7',
    padding: 7,
    borderRadius: 10,
    marginRight: 10,
  },
  locationText: {},
});
export default DestinationSearch;
