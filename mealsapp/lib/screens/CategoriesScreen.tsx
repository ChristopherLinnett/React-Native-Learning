import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import {CATEGORIES} from '../data/DummyData';

const CategoriesScreen = () => {
  return (
    <View style={styles.root}>
      <FlatList
        numColumns={2}
        data={CATEGORIES}
        keyExtractor={(item, _) => item.id}
        renderItem={renderedItem => (
          <CategoryGridTile
            id={renderedItem.item.id}
            title={renderedItem.item.title}
            colour={renderedItem.item.colour}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
export default CategoriesScreen;
