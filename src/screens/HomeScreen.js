import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import Constants from 'expo-constants';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>home</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
  },
});
