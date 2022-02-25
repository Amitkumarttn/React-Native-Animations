import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  Button,
  TouchableOpacity,
} from 'react-native';

const animatedButton = () => {
  const [count, setCount] = useState(0);
  const animation = useRef(new Animated.Value(0)).current;
  const scale = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.6],
  });

  const onPressIn = () => {
    Animated.spring(animation, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    setTimeout(() => {
      Animated.spring(animation, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
    }, 100);
  };
  const onPress = () => setCount(count + 1);
  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      <Animated.View style={[styles.button, {transform: [{scale}]}]}>
        <View style={styles.btn}>
          <TouchableOpacity
            style={styles.btn}
            activeOpacity={1}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            onPress={onPress}>
            <Text style={styles.btnText}>COUNTER + 1</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
  },
  button: {
    backgroundColor: '#132a5c',
    marginBottom: 20,
    borderRadius: 10,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  btnText: {
    color: '#fff',
    fontSize: 25,
  },
  count: {
    fontSize: 30,
  },
});

export default animatedButton;
