import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Pressable, StyleSheet} from 'react-native';

type IconProps = {
  icon: any;
  colour: string;
  size: number;
  onPress: Function;
};
const Icon = ({icon, colour = 'white', size = 10, onPress}: IconProps) => {
  return (
    <Pressable
      style={styles.button}
      onPress={() => {
        onPress();
      }}>
      <FontAwesomeIcon icon={icon} color={colour} size={size} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 20,
    height: 20,
  },
});

export default Icon;
