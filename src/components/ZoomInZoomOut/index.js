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

const zoomInZoomOut = () => {
  const scale = useRef(new Animated.Value(0)).current;
  const [scaled, setScaled] = useState(false);
  const animate = () => {
    Animated.spring(scale, {
      toValue: scaled ? 1 : 2,
      useNativeDriver: true,
    }).start();
    setScaled(!scaled);
  };
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, {transform: [{scale}]}]} />
      <View style={styles.btn}>
        <Button title={scaled ? 'Scale Out' : 'Scale In'} onPress={animate} />
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

export default zoomInZoomOut;
