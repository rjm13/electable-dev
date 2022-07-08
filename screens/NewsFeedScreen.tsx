import {useState, useEffect} from 'react'

import { 
  StyleSheet,
  TouchableWithoutFeedback,
 } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { Text, View } from '../components/Themed';
//<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

const NewsFeedScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{height: 30, width: '100%', backgroundColor: 'transparent'}}/>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
        
        <TouchableWithoutFeedback>
          <FontAwesome 
            name='user'
            size={20}
            color='gray'
            style={{
              padding: 20
            }}
          />
        </TouchableWithoutFeedback>

        <View style={{flexDirection: 'row'}}>
          <TouchableWithoutFeedback>
            <FontAwesome 
              name='filter'
              size={20}
              color='gray'
              style={{
                padding: 20
              }}
            />
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback>
            <FontAwesome 
              name='gear'
              size={20}
              color='gray'
              style={{
                padding: 20
              }}
            />
          </TouchableWithoutFeedback>
        </View>
        
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

export default NewsFeedScreen;