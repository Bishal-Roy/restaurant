import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
} from 'react-native';
import Constants from 'expo-constants';

const MenuScreen = (props) => {
  return (
    <SafeAreaView>
      <View>
        <Text>Menu</Text>
        <Button
          title='press'
          onPress={() => props.navigation.navigate('Dish Details')}
        />
      </View>
    </SafeAreaView>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    // paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
  },
});
