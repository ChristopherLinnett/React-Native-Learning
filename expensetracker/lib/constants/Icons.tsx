import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export const Icons = {
  hourglass: (color: string, size: number) => {
    return <Icon name="hourglass" size={size} color={color} />;
  },
  calendar: (color: string, size: number) => {
    return <Icon name="calendar" size={size} color={color} />;
  },
};
