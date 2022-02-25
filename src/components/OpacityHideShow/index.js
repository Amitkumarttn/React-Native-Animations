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

const opacityHideShow = () => {
  const opacity = useRef(new Animated.Value(1)).current;
  const [visible, setVisible] = useState(true);
  const animate = () => {
    Animated.spring(opacity, {
      toValue: visible ? 0 : 1,
      useNativeDriver: true,
    }).start();
    setVisible(!visible);
  };
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, {opacity}]} />
      <View style={styles.btn}>
        <Button title={visible ? 'Opacity Out' : 'Opacity In'} onPress={animate} />
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

export default opacityHideShow;
