import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Animated,
  ScrollView,
} from 'react-native';
import React, {useRef} from 'react';

const {width} = Dimensions.get('window');
const data = ['brown', 'orange', 'red', 'blue', 'green'];

const swiperImage1 = () => {
  const scrollValue = useRef(new Animated.Value(0)).current;
  const translateX = scrollValue.interpolate({
    inputRange: [0, width],
    outputRange: [0, 20],
  });
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        decelerationRate={'fast'}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollValue}}}],
          {useNativeDriver: false},
        )}>
        {data.map(x => (
          <View key={x} style={[styles.card, {backgroundColor: x}]} />
        ))}
      </ScrollView>
      <View style={styles.indicatorContainer}>
        {data.map(x => (
          <Indicator x={x} key={x} />
        ))}
        <Animated.View
          style={[
            styles.activeIndicator,
            {position: 'absolute', transform: [{translateX}]},
          ]}
        />
      </View>
    </View>
  );
};

const Indicator = () => {
  return <View style={styles.indicator} />;
};

export default swiperImage1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 3,
  },
  card: {
    width: width - 10,
    height: '100%',
    marginHorizontal: 5,
    borderRadius: 5,
  },
  indicatorContainer: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
  },
  indicator: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#00000044',
    marginHorizontal: 5,
  },
  activeIndicator: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginHorizontal: 5,
  },
});
