import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Place from '../../models/Place';
import PlaceItem from '../PlaceItem';

type PlacesListProps = {places?: Place[]};
const PlacesList = ({places}: PlacesListProps) => {
  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackConatiner}>
        <Text style={styles.fallbackText}>
          No Places Added Yet, Starting Adding Some
        </Text>
      </View>
    );
  }
  return (
    <FlatList
      data={places}
      keyExtractor={(place, _) => place.id}
      renderItem={({item}) => <PlaceItem place={item} />}
    />
  );
};

const styles = StyleSheet.create({
  fallbackConatiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fallbackText: {
    fontSize: 24,
  },
});

export default PlacesList;
