import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {GlobalTheme} from '../constants/theme';

const LoadingOverlay = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={GlobalTheme.colors.primary100} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: GlobalTheme.colors.primary800,
  },
});

export default LoadingOverlay;
