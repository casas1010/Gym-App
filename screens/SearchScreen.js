import React, { useState, useEffect,useRef } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
       isInitialMount.current = false;
    } else {
      // console.log('results:  ',results.exerciseNames )
    }
  },[results]);

 

  // const filterResultsByName = name => {
  //   return results.filter(result => {
  //     return result.name === name;
  //   });
  // };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>


      <ResultsList
          results={results.exerciseNames}
          title={'All exercises'}
      />




        {/* <ResultsList
          results={filterResultsByPrice('$')}
          title="Cost Effective"
        />
        <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" />
        <ResultsList
          results={filterResultsByPrice('$$$')}
          title="Big Spender"
        /> */}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
