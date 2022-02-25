// import {useNavigation} from '@react-navigation/core';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PhoneRingAnimation from '../components/PhoneRingAnimation/index';
import StickyHeaderFlatList from '../components/StickyHeaderFlatlist/index';
import MoveRightAnimation from '../components/MoveRightAnimation';
import ZoomInZoomOut from '../components/ZoomInZoomOut';
import OpacityHideShow from '../components/OpacityHideShow';
import RotateAnimation from '../components/RotateAnimation';
import AnimatedButton from '../components/AnimatedButton';


const Home = () => {
  return (
    <View style={styles.container}>
      <AnimatedButton />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});