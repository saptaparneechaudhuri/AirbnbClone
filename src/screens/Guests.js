import React, {useState} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

const Guests = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  return (
    <View style={{justifyContent: 'space-between', height: '100%'}}>
      <View>
        {/* Row 1: Adults */}
        <View style={styles.row}>
          {/* Titles */}
          <View>
            <Text style={{fontWeight: 'bold'}}>Adults</Text>
            <Text style={{color: '#8d8d8d'}}>Ages 13 or Above</Text>
          </View>
          {/* Buttons */}
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {/* - */}
            <Pressable
              onPress={() => {
                setAdults(Math.max(0, adults - 1));
              }}
              style={styles.button}>
              <Text style={{fontSize: 20, color: '#474747'}}>-</Text>
            </Pressable>
            {/* value */}
            <Text style={{marginHorizontal: 20, fontSize: 16}}>{adults}</Text>
            {/* plus */}
            <Pressable
              onPress={() => {
                setAdults(adults + 1);
              }}
              style={styles.button}>
              <Text style={{fontSize: 20, color: '#474747'}}>+</Text>
            </Pressable>
          </View>
        </View>

        {/* Row 2: Children */}
        <View style={styles.row}>
          {/* Titles */}
          <View>
            <Text style={{fontWeight: 'bold'}}>Children</Text>
            <Text style={{color: '#8d8d8d'}}>Ages 2-12</Text>
          </View>
          {/* Buttons */}
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {/* - */}
            <Pressable
              onPress={() => {
                setChildren(Math.max(0, children - 1));
              }}
              style={styles.button}>
              <Text style={{fontSize: 20, color: '#474747'}}>-</Text>
            </Pressable>
            {/* value */}
            <Text style={{marginHorizontal: 20, fontSize: 16}}>{children}</Text>
            {/* plus */}
            <Pressable
              onPress={() => {
                setChildren(children + 1);
              }}
              style={styles.button}>
              <Text style={{fontSize: 20, color: '#474747'}}>+</Text>
            </Pressable>
          </View>
        </View>

        {/* Row 3: Infants */}
        <View style={styles.row}>
          {/* Titles */}
          <View>
            <Text style={{fontWeight: 'bold'}}>Infants</Text>
            <Text style={{color: '#8d8d8d'}}>Under 2</Text>
          </View>
          {/* Buttons */}
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {/* - */}
            <Pressable
              onPress={() => {
                setInfants(Math.max(0, infants - 1));
              }}
              style={styles.button}>
              <Text style={{fontSize: 20, color: '#474747'}}>-</Text>
            </Pressable>
            {/* value */}
            <Text style={{marginHorizontal: 20, fontSize: 16}}>{infants}</Text>
            {/* plus */}
            <Pressable
              onPress={() => {
                setInfants(infants + 1);
              }}
              style={styles.button}>
              <Text style={{fontSize: 20, color: '#474747'}}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View>
        <Pressable
          onPress={() => {}}
          style={{
            bottom: 20,
            backgroundColor: '#f15454',
            alignItems: 'center',
            justifyContent: 'center',
            height: 50,
            marginHorizontal: 20,
            borderRadius: 10,
          }}>
          <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
            Search
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  button: {
    borderWidth: 1,
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#676767',
  },
});

export default Guests;
