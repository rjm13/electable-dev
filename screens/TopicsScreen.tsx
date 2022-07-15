import {useState} from 'react';

import { 
  StyleSheet, 
  TouchableWithoutFeedback,
  TouchableOpacity,
  Dimensions,
  FlatList
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Text, View } from '../components/Themed';

const QuestionsScreen = ({navigation} : any) => {

  const data = [
    {
      id: 1,
      topic: 'healthcare',
      icon: 'heartbeat'
    },
    {
      id: 2,
      topic: 'COVID-19',
      icon: 'virus'
    },
    {
      id: 3,
      topic: 'Immigration',
      icon: 'globe'
    },
    {
      id: 4,
      topic: 'Inflation',
      icon: 'money-bill'
    },
  ]

  const Item = ({id, topic, icon} : any) => {
    return (
      <TouchableWithoutFeedback onPress={() => navigation.navigate("Topic")}>
         <View style={{alignItems: 'center', backgroundColor: '#f0f0f0', width: '44%', borderRadius: 10, borderColor: 'gray', borderWidth: 1, paddingVertical: 20, margin: 8}}>
          <Text style={{textAlign: 'center', textTransform: 'capitalize', fontWeight: 'bold'}}>
            {topic}
          </Text>
          <FontAwesome5 
            name={icon}
            color='gray'
            size={25}
            style={{marginVertical: 20}}
          />
        </View>
      </TouchableWithoutFeedback>
     
    )
  }

  const renderItem = ({item}:any) => {
    return (
      <Item 
        id={item.id}
        topic={item.topic}
        icon={item.icon}
      />
    )
  }

    return (
        <View style={styles.container}>
            <View style={{height: 60, backgroundColor: 'transparent'}}/>
            <View>
              <FlatList 
                data={data}
                //keyExtractor={item => item.id}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                columnWrapperStyle={{justifyContent: 'space-around'}}
                style={{}}
                ListHeaderComponent={
                  <View style={{marginVertical: 20}}>
                    <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20}}>
                      Topics
                    </Text>
                  </View>
                }
              />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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

export default QuestionsScreen;