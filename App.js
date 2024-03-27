import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import { TouchableOpacity } from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.headingTop}>WELCOME TO ENDLESS LIBRABY !</Text>
      <StatusBar style="auto" />
      <TouchableOpacity
        title="EXPLORE"
        style={styles.exploreButton}
        onPress={() => {
          alert('You clicked me!');
        }}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C0C0C',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  headingTop : {
    color: 'white',
    fontSize: 35,
    fontWeight: 700,
  },
  exploreButton : {
    color: 'white',
    backgroundColor: 'black',
    width: 400,
    fontSize: 20,
    fontWeight: 700,
  }
});
