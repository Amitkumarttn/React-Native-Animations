import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  Button,
  Easing,
} from 'react-native';

const waveAnimation = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const rotate = animatedValue.interpolate({
    inputRange: [0, 1, 2, 3, 4, 5, 6, 10],
    outputRange: [
      '0deg',
      '14deg',
      '-8deg',
      '14deg',
      '-4deg',
      '10deg',
      '0deg',
      '0deg',
    ],
  });
  const animate = () => {
    animatedValue.setValue(0);
    Animated.timing(animatedValue, {
      toValue: 10,
      useNativeDriver: true,
      easing: Easing.linear,
      duration: 2500,
    }).start();
  };
  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.wave, {transform: [{rotate}]}]}>✌️</Animated.Text>
      <Button title='Press' onPress={animate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
  },
  wave: {
    fontSize: 60,
    paddingBottom: 25,
    paddingRight: 25,
  },
});

export default waveAnimation;
