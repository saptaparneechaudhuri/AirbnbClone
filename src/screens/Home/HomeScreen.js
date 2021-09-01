import React from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
  Dimensions,
  StatusBar,
} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <StatusBar translucent backgroundColor="transparent" />

      {/* Search Bar */}
      <Pressable
        style={styles.searchButton}
        onPress={() => {
          navigation.navigate('DestinationSearch');
        }}>
        <Fontisto name="search" size={25} color="#f15454" />
        <Text style={styles.searchButtonText}>Where are you going?</Text>
      </Pressable>

      <ImageBackground
        source={require('../../assets/images/wallpaper.jpg')}
        style={styles.image}>
        {/* Title */}
        <Text style={styles.title}>Go Near</Text>

        {/* Button */}
        <Pressable style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '90%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 80,
    fontWeight: 'bold',
    color: 'white',
    width: '70%',
    marginLeft: 25,
  },
  button: {
    backgroundColor: '#fff',
    width: 200,
    height: 40,
    borderRadius: 10,
    marginLeft: 25,
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchButton: {
    backgroundColor: '#fff',
    height: 60,
    width: Dimensions.get('screen').width - 20,
    borderRadius: 30,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 50,
    zIndex: 100,
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
