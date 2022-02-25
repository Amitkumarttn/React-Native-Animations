import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';

const data = [
  'James',
  'Robert',
  'John',
  'Michael',
  'William',
  'David',
  'Richard',
  'Thomas',
  'Charles',
  'Daniel',
  'Matthew',
  'Mark',
  'Donald',
  'Steven',
  'Paul',
  'Kenneth',
  'Kevin',
  'Brian',
  'George',
  'Edward',
  'Ronald',
  'Timothy',
  'Ryan',
  'Gary',
  'Nicholas',
  'Eric',
  'Stephen',
  'Larry',
  'Scott',
  'Brandon',
  'Samuel',
  'Gregory',
  'Frank',
  'Raymond',
  'Patrick',
  'Dennis',
  'Tyler',
  'Henry',
  'Nathan',
  'Douglas',
  'Zachary',
  'Peter',
  'Kyle',
  'Walter',
  'Ethan',
  'Harold',
  'Keith',
  'Roger',
  'Noah',
  'Gerald',
  'Terry',
  'Sean',
  'Lawrence',
  'Dylan',
  'Billy',
  'Willie',
  'Gabriel',
  'Logan',
  'Wayne',
  'Roy',
  'Ralph',
  'Randy',
  'Eugene',
  'Vincent',
  'Russell',
  'Elijah',
  'Louis',
  'Philip',
  'Mary',
  'Patricia',
  'Linda',
  'Elizabeth',
  'Susan',
  'Sarah',
  'Karen',
  'Nancy',
  'Lisa',
  'Margaret',
  'Sandra',
  'Ashley',
  'Kimberly',
  'Emily',
  'Donna',
  'Michelle',
  'Dorothy',
  'Carol',
  'Amanda',
  'Melissa',
  'Deborah',
  'Stephanie',
  'Rebecca',
  'Sharon',
  'Laura',
  'Kathleen',
  'Amy',
  'Shirley',
  'Angela',
  'Helen',
  'Anna',
  'Brenda',
  'Pamela',
  'Nicole',
  'Emma',
  'Samantha',
  'Katherine',
  'Debra',
  'Rachel',
  'Janet',
  'Ruth',
  'Maria',
  'Heather',
  'Diane',
  'Virginia',
  'Julie',
  'Joyce',
  'Victoria',
  'Olivia',
  'Kelly',
  'Christina',
  'Lauren',
  'Joan',
  'Evelyn',
  'Judith',
  'Megan',
  'Cheryl',
  'Hannah',
  'Martha',
  'Jacqueline',
  'Frances',
  'Gloria',
  'Teresa',
  'Kathryn',
  'Sara',
  'Janice',
  'Jean',
  'Madison',
  'Doris',
  'Julia',
  'Judy',
  'Grace',
  'Denise',
  'Marilyn',
  'Beverly',
  'Danielle',
  'Theresa',
  'Sophia',
  'Marie',
  'Diana',
  'Brittany',
  'Natalie',
  'Isabella',
  'Charlotte',
  'Rose',
  'Kayla',
];

const stickyHeaderFlatList = () => {
  const _data = data.sort();
  let finalData = [];
  let stickyIndex = [];
  _data.forEach((name, i) => {
    if (i == 0 || name.substr(0, 1) != _data[i - 1].substr(0, 1)) {
      stickyIndex.push(i + stickyIndex.length);
      finalData.push({
        id: i.toString() + 'head',
        name: name.substr(0, 1),
        type: 'head',
      });
    }
    finalData.push({id: i.toString() + 'name', name, type: 'name'});
  });
  return (
    <View style={styles.container}>
      <FlatList
        data={finalData}
        keyExtractor={item => item.id}
        stickyHeaderIndices={stickyIndex}
        renderItem={({item}) => (
          <View style={item.type == 'name' ? styles.item : styles.head}>
            <Text style={item.type == 'name' ? styles.itemTxt : styles.headTxt}>
              {item.name}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default stickyHeaderFlatList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 20,
    paddingVertical: 20,
    backgroundColor: '#eee',
    borderBottomWidth: 2,
    borderColor: '#fff',
  },
  head: {
    padding: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
    elevation: 2,
  },
  itemTxt: {
    fontSize: 18,
  },
  headTxt: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
