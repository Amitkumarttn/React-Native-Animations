import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
  Animated,
} from 'react-native';
import React, {useRef, useState} from 'react';

const {width, height} = Dimensions.get('window');
const boxWidth = 100;

const moveRightAnimation = () => {
  const translateX = useRef(new Animated.Value(0)).current;
  const [onRight, setonRight] = useState(false);
  const animate = () => {
    Animated.spring(translateX, {
      toValue: onRight ? 0 : width - boxWidth,
      useNativeDriver: true,
    }).start();
    setonRight(!onRight);
  };
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, {transform: [{translateX}]}]} />
      <View style={styles.btn}>
        <Button
          onPress={animate}
          title={onRight ? 'Move Left' : 'Move Right'}
        />
      </View>
    </View>
  );
};

export default moveRightAnimation;

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
  },
  btn: {
    paddingHorizontal: 50,
  },
});
