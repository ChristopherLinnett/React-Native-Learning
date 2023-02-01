import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

type ListItemProps = {data: string[]};

const List = ({data}: ListItemProps) => {
  const list = data?.map(dataPoint => (
    <View key={dataPoint} style={styles.container}>
      <Text style={styles.textStyle}>{dataPoint}</Text>
    </View>
  ));

  return <View style={styles.centered}>{list}</View>;
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    padding: 10,
    marginVertical: '2%',
    width: '80%',
    backgroundColor: '#505A5B',
    borderRadius: 20,
  },
  textStyle: {
    fontSize: 14,
    color: 'white',
  },
  centered: {
    flex: 1,
    alignItems: 'center',
  },
});
export default List;
