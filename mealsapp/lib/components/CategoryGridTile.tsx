import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import React from 'react';
import {Pressable, StyleSheet, Text, View, Platform} from 'react-native';

const CategoryGridTile = ({id, title, colour}: CategoryGridTileProps) => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  return (
    <View style={[styles.gridItem]}>
      <Pressable
        onPress={() => {
          navigation.navigate('MealsOverview', {categoryID: id});
        }}
        android_ripple={{color: 'grey'}}
        style={({pressed}) => [
          {backgroundColor: colour},
          styles.buttonContainer,
          pressed ? styles.pressed : null,
        ]}>
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    margin: 16,
    height: 150,
    borderRadius: 30,

    flex: 1,
    elevation: 4,

    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    shadowColor: 'black',
    shadowOffset: {width: 4, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  pressed: {
    opacity: Platform.OS === 'ios' ? 0.5 : 1,
    shadowOpacity: 0,
  },
});

export default CategoryGridTile;

interface CategoryGridTileProps {
  id: string;
  title: string;
  colour: string;
}
