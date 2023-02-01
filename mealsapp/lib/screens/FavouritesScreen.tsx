import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FavouritesScreen = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.textCenter}>This is the Favourites Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    alignContent: 'center',
    justifyContent: 'center',
  },
  textCenter: {textAlign: 'center'},
});

export default FavouritesScreen;
