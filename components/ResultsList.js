import React, {useEffect,useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultsDetail from './ResultDetail';

const ResultsList = ({ title, results, navigation }) => {
  const isInitialMount = useRef(true);


  useEffect(() => {
    if (isInitialMount.current) {
       isInitialMount.current = false;
    } else {
      
    }
  },[results]);

  // if (!results.data.length) {
  //   return null;
  // }
  return(<Text>hi</Text>)

  // return (
  //   <View style={styles.container}>
  //     <Text style={styles.title}>{title}</Text>
  //     <FlatList
  //       horizontal
  //       showsHorizontalScrollIndicator={false}
  //       data={results.exerciseNames}
  //       keyExtractor={result => result.id}
  //       renderItem={(element) => {
  //         // console.log('element:  ',element)
  //         return <Text>{element.item}</Text>
  //     }}
  //       // renderItem={({ item }) => {
  //       //   return (
  //       //     <TouchableOpacity
  //       //       onPress={() =>
  //       //         navigation.navigate('ResultsShow', { id: item.id })
  //       //       }
  //       //     >
  //       //       <ResultsDetail result={item} />
  //       //     </TouchableOpacity>
  //       //   );
  //       // }}
  //     />
  //   </View>
  // );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5
  },
  container: {
    marginBottom: 10
  }
});

export default withNavigation(ResultsList);
