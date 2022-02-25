import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  Button,
} from 'react-native';

const {width} = Dimensions.get('window');
const boxWidth = 100;

const rotateAnimation = () => {
  const _rotate = useRef(new Animated.Value(0)).current;
  const rotate = _rotate.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '90deg'],
  });
  const animate = () => {
    _rotate.setValue(0)
    Animated.spring(_rotate, {
      toValue: 1,
      useNativeDriver: true,
      bounciness: 0
    }).start();
  };
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, {transform: [{rotate}]}]} />
      <View style={styles.btn}>
        <Button title="rotate" onPress={animate} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
  },
  box: {
    height: boxWidth,
    width: boxWidth,
    backgroundColor: '#ab0b00',
    alignItems: 'center',
  },
  btn: {
    paddingHorizontal: 50,
  },
});

export default rotateAnimation;
