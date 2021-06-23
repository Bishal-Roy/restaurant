import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  Image,
} from 'react-native';
import Constants from 'expo-constants';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/6127334/pexels-photo-6127334.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          }}
          style={styles.image}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
