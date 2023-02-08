import React from 'react';
import {
  GestureResponderEvent,
  Image,
  Pressable,
  Text,
  View,
} from 'react-native';
import Place from '../models/Place';

type PlaceItemProps = {
  place: Place;
  onSelect?: (event: GestureResponderEvent) => void;
};
const PlaceItem = ({place, onSelect}: PlaceItemProps) => {
  return (
    <Pressable onPress={onSelect}>
      <Image source={{uri: place.imageUri}} />
      <View>
        <Text>{place.title}</Text>
        <Text>{place.address}</Text>
      </View>
    </Pressable>
  );
};

export default PlaceItem;
