import React from 'react';
import {GestureResponderEvent, Pressable, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

type IconButtonProps = {
  icon: string;
  size: number;
  color?: string;
  onPress?: (event: GestureResponderEvent) => void;
};
const IconButton = ({icon, size, color, onPress}: IconButtonProps) => {
  return (
    <Pressable
      style={({pressed}) => [
        styles.button,
        pressed && styles.pressed,
        {shadowColor: color},
      ]}
      onPress={onPress}>
      <Icon name={icon} size={size} color={color ?? 'blue'} onPress={onPress} />
    </Pressable>
  );
};
const styles = StyleSheet.create({
  button: {
    padding: 0,
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowRadius: 3,
    shadowOffset: {width: 0, height: 0},
  },
  pressed: {opacity: 0.5},
});
export default IconButton;
