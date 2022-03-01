import {
  LayoutAnimation,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from 'react-native';
import React, {useState} from 'react';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const collapsibleHeader = () => {
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {number.map((x, i) => (
        <Item key={x} i={i} />
      ))}
    </ScrollView>
  );
};

function Item({i}) {
  const [open, setOpen] = useState(false);
  const num = [1, 2, 3, 4, 5];
  const onPress = () => {
    LayoutAnimation.easeInEaseOut();
    setOpen(!open);
  };
  return (
    <TouchableOpacity style={styles.item} onPress={onPress} activeOpacity={1}>
      <View style={styles.row}>
        <Text>Header - {i + 1}</Text>
        <Text>{open ? 'close' : 'Open'}</Text>
      </View>
      {open &&
        num.map(x => (
          <Text key={x} style={styles.subItem}>
            - Some Data
          </Text>
        ))}
    </TouchableOpacity>
  );
}

export default collapsibleHeader;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 50,
    paddingTop: 5,
  },
  item: {
    width: '100%',
    borderWidth: 1,
    paddingHorizontal: 20,
    overflow: 'hidden',
    paddingVertical: 10,
    marginBottom: 5,
  },
  subItem: {
    padding: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
