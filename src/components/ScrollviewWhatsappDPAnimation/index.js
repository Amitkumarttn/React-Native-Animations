import React, {useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  View,
} from 'react-native';

const {width} = Dimensions.get('window');
const headerHeight = 300;
const headerFinalHeight = 70;
const imageSize = (headerHeight / 3) * 2;

const DATA = [
  {id: 'header'},
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 4},
  {id: 5},
  {id: 6},
  {id: 7},
  {id: 8},
  {id: 9},
  {id: 10},
];

const scrollViewAnimatedHeader = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [textWidth, setTextWidth] = useState(0);
  const offset = headerHeight - headerFinalHeight;
  const translateHeader = scrollY.interpolate({
    inputRange: [0, offset],
    outputRange: [0, -offset],
    extrapolate: 'clamp',
  });
  const translateImageY = scrollY.interpolate({
    inputRange: [0, offset],
    outputRange: [0, -(headerFinalHeight - headerHeight) / 2],
    extrapolate: 'clamp',
  });
  const translateImageX = scrollY.interpolate({
    inputRange: [0, offset],
    outputRange: [
      0,
      -(width / 2) + (imageSize * headerFinalHeight) / headerHeight,
    ],
    extrapolate: 'clamp',
  });
  const scaleImage = scrollY.interpolate({
    inputRange: [0, offset],
    outputRange: [1, headerFinalHeight / headerHeight],
    extrapolate: 'clamp',
  });
  const translateName = scrollY.interpolate({
    inputRange: [0, offset / 2, offset],
    outputRange: [0, 10, -width / 2 + textWidth / 2 + headerFinalHeight],
    extrapolate: 'clamp',
  });
  const scaleName = scrollY.interpolate({
    inputRange: [0, offset],
    outputRange: [1, 0.8],
    extrapolate: 'clamp',
  });
  const renderItem = ({index}) => {
    if (index == 0)
      return (
        <Animated.View
          style={[styles.header, {transform: [{translateY: translateHeader}]}]}>
          <Animated.View
            style={[
              styles.image,
              {
                transform: [
                  {translateY: translateImageY},
                  {translateX: translateImageX},
                  {scale: scaleImage},
                ],
              },
            ]}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
              }}
              style={styles.img}
              resizeMode="cover"
            />
          </Animated.View>
          <Animated.Text
            onTextLayout={e => setTextWidth(e.nativeEvent.lines[0].width)}
            style={[
              styles.name,
              {transform: [{translateX: translateName}, {scale: scaleName}]},
            ]}>
            Amit
          </Animated.Text>
        </Animated.View>
      );
    return <View style={styles.item} />;
  };
  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      stickyHeaderIndices={[0]}
      onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollY}}}], {
        useNativeDriver: false,
      })}
    />
  );
};

export default scrollViewAnimatedHeader;
const styles = StyleSheet.create({
  item: {
    height: 100,
    marginBottom: 5,
    backgroundColor: 'grey',
    marginHorizontal: 10,
  },
  header: {
    height: headerHeight,
    marginBottom: 5,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: imageSize,
    width: imageSize,
    borderRadius: headerHeight,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  img: {
    height: '100%',
    width: '100%',
  },
  name: {
    fontSize: 30,
    color: '#000',
    position: 'absolute',
    bottom: 0,
    height: headerFinalHeight,
    textAlignVertical: 'center',
    letterSpacing: 2,
  },
});

// import {
//   Dimensions,
//   StyleSheet,
//   Text,
//   View,
//   Animated,
//   ScrollView,
//   Image,
// } from 'react-native';
// import React, {useRef, useState} from 'react';

// const {width} = Dimensions.get('window');
// const headerHeight = 300;
// const headerFinalHeight = 70;
// const imageSize = (headerHeight / 3) * 2;
// const imageUrl =
//   'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80';

// const scrollViewAnimatedHeader = () => {
//   const scrollY = useRef(new Animated.Value(0)).current;
//   const [textWidth, setTextWidth] = useState(0);
//   const offset = headerHeight - headerFinalHeight;
//   const translateHeader = scrollY.interpolate({
//     inputRange: [0, offset],
//     outputRange: [0, -offset],
//     extrapolate: 'clamp',
//   });
//   const translateImageY = scrollY.interpolate({
//     inputRange: [0, offset],
//     outputRange: [0, -(headerFinalHeight - headerHeight) / 2],
//     extrapolate: 'clamp',
//   });
//   const translateImageX = scrollY.interpolate({
//     inputRange: [0, offset],
//     outputRange: [
//       0,
//       -(width / 2) + (imageSize * headerFinalHeight) / headerHeight,
//     ],
//     extrapolate: 'clamp',
//   });
//   const scaleImage = scrollY.interpolate({
//     inputRange: [0, offset],
//     outputRange: [1, headerFinalHeight / headerHeight],
//     extrapolate: 'clamp',
//   });
//   const translateName = scrollY.interpolate({
//     inputRange: [0, offset / 2, offset],
//     outputRange: [0, 10, -width / 2 + textWidth / 2 + headerFinalHeight],
//     extrapolate: 'clamp',
//   });
//   const scaleName = scrollY.interpolate({
//     inputRange: [0, offset],
//     outputRange: [1, 0.8],
//     extrapolate: 'clamp',
//   });
//   return (
//     <View style={styles.container}>
//       <ScrollView
//         contentContainerStyle={styles.scrollContainer}
//         showsVerticalScrollIndicator={false}
//         onScroll={Animated.event(
//           [{nativeEvent: {contentOffset: {y: scrollY}}}],
//           {useNativeDriver: false},
//         )}>
//         {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(x => (
//           <View style={styles.item} key={x} />
//         ))}
//       </ScrollView>
//       <Animated.View
//         pointerEvents={'none'}
//         style={[styles.header, {transform: [{translateY: translateHeader}]}]}>
//         <Animated.View
//           style={[
//             styles.image,
//             {
//               transform: [
//                 {translateY: translateImageY},
//                 {translateX: translateImageX},
//                 {scale: scaleImage},
//               ],
//             },
//           ]}>
//           <Image
//             source={{uri: imageUrl}}
//             style={styles.img}
//             resizeMode="cover"
//           />
//         </Animated.View>
//         <Animated.Text
//           onTextLayout={e => setTextWidth(e.nativeEvent.lines[0].width)}
//           style={[
//             styles.name,
//             {transform: [{translateX: translateName}, {scale: scaleName}]},
//           ]}>
//           Amit Mehta
//         </Animated.Text>
//       </Animated.View>
//     </View>
//   );
// };

// export default scrollViewAnimatedHeader;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   item: {
//     height: 100,
//     marginBottom: 5,
//     backgroundColor: 'gray',
//     marginHorizontal: 10,
//   },
//   header: {
//     height: headerHeight,
//     backgroundColor: '#f2f2f2',
//     position: 'absolute',
//     width: '100%',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   scrollContainer: {
//     paddingTop: headerHeight + 5,
//   },
//   image: {
//     height: imageSize,
//     width: imageSize,
//     borderRadius: headerHeight,
//     backgroundColor: '#fff',
//     overflow: 'hidden',
//   },
//   img: {
//     height: '100%',
//     width: '100%',
//   },
//   name: {
//     fontSize: 30,
//     color: '#000',
//     position: 'absolute',
//     bottom: 0,
//     height: headerFinalHeight,
//     textAlignVertical: 'center',
//     letterSpacing: 2,
//   },
// });
