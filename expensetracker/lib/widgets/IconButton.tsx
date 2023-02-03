import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
type IconButtonProps = {
  name: string;
  size: number;
  color: string;
  onPress: Function;
};

export const PremadeIcon = (
  name: string | undefined,
  color: string | undefined,
  onPress: Function,
) =>
  IconButton({
    name: name ?? '',
    size: 24,
    color: color ?? 'white',
    onPress: onPress,
  });

const IconButton = ({name, size, color, onPress}: IconButtonProps) => {
  return (
    <Pressable
      style={({pressed}) => pressed && styles.pressed}
      onPress={() => {
        onPress();
      }}>
      <View style={styles.buttonContainer}>
        <Icon name={name} size={size} color={color} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
  buttonContainer: {
    borderRadius: 24,
    padding: 6,
    marginHorizontal: 8,
    marginVertical: 2,
  },
});

export default IconButton;
