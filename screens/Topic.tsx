import {useState} from 'react';

import { 
  StyleSheet, 
  TouchableWithoutFeedback,
  TouchableOpacity,
  Dimensions,
  FlatList,
  InteractionManager
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Text, View } from '../components/Themed';

const Topic = () => {

  const topic = 
    {
      id: 1,
      name: 'healthcare',

    }

    const data = [
        {
            id: 1,
            question: 'Would you support a national nurses union?',
            context: 'Unions are a great way to protect workers from work place abuse. Unfortunately, corportations are able to go through very sketchy and borderline illegal union busting practices. Nurses are attempting to achieve a national nurses union, but need legistlation to hep fight corporate union busting. Would you support this?',
            source1: '',
            source2: '',
            proposedto: 'local offices',
            date: '4 hours ago',
            responses: 42,
            bumps: 100
        },
        {
            id: 2,
            question: 'What do you think would be the downsides of a single-payer national insurance system?',
            context: 'Unions are a great way to protect workers from work place abuse. Unfortunately, corportations are able to go through very sketchy and borderline illegal union busting practices. Nurses are attempting to achieve a national nurses union, but need legistlation to hep fight corporate union busting. Would you support this?',
            source1: '',
            source2: '',
            proposedto: 'Ted Cruz',
            date: '4 hours ago',
            responses: 2,
            bumps: 88
        },
        {
            id: 3,
            question: 'Would you support a national nurses union?',
            context: 'Unions are a great way to protect workers from work place abuse. Unfortunately, corportations are able to go through very sketchy and borderline illegal union busting practices. Nurses are attempting to achieve a national nurses union, but need legistlation to hep fight corporate union busting. Would you support this?',
            source1: '',
            source2: '',
            proposedto: 'Railroad Comissioners',
            date: '8 hours ago',
            responses: 4,
            bumps: 2
        },
        {
            id: 4,
            question: 'Would you support a national nurses union?',
            context: 'Unions are a great way to protect workers from work place abuse. Unfortunately, corportations are able to go through very sketchy and borderline illegal union busting practices. Nurses are attempting to achieve a national nurses union, but need legistlation to hep fight corporate union busting. Would you support this?',
            source1: '',
            source2: '',
            proposedto: 'local offices',
            date: 'yesterday',
            responses: 18,
            bumps: 45
        }
    ]
  

  const Item = ({id, question, responses, proposedto, date, bumps, context, source1, source2} : any) => {

    const [isVis, setIsVis] = useState(false);

    return (
         <View style={{alignItems: 'center', backgroundColor: '#f0f0f0', borderRadius: 10, borderColor: 'gray', borderWidth: 1, width: Dimensions.get('window').width - 20, margin: 10}}>
          <View style={{flexDirection: 'row', backgroundColor: 'transparent', alignItems: 'center', width: '100%'}} >
            <Text style={{textTransform: 'capitalize', fontWeight: 'bold', paddingLeft: 20, width: '80%',  }}>
                {question}
            </Text>
            <FontAwesome5 
                name={isVis === true ? 'chevron-circle-down' : 'chevron-circle-right'}
                size={20}
                color='gray'
                style={{padding: 20}}
                onPress={() => setIsVis(!isVis)}
            />
          </View>
          <View style={{width: '100%', paddingHorizontal: 20, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'flex-end', marginBottom: 10, backgroundColor: 'transparent'}}>
            <View style={{backgroundColor: 'transparent'}}>
               <Text style={{textTransform: 'capitalize', fontSize: 12}}>
                    {proposedto}
                </Text> 
                <Text style={{textTransform: 'capitalize', fontSize: 12}}>
                    {date}
                </Text>
                <Text style={{textTransform: 'capitalize', fontSize: 12}}>
                    {responses} responses
                </Text>
            </View>
            
            <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: 'trasnparent'}}>
                <FontAwesome 
                    name='thumbs-up'
                    size={17}
                    color='green'
                    style={{marginRight: 6}}
                />
                <Text style={{textTransform: 'capitalize', fontSize: 12}}>
                    {bumps}
                </Text>
            </View>
          </View>
          {isVis === true ? (
            <View style={{padding: 20, backgroundColor: 'transparent'}}>
                <View style={{backgroundColor: 'transparent'}}>
                    <Text>
                        {context}
                    </Text>
                </View>
            </View>
          ) : null}

        </View>
     
    )
  }

  const renderItem = ({item}:any) => {
    return (
      <Item 
        id={item.id}
        question={item.question}
        proposedto={item.proposedto}
        responses={item.responses}
        date={item.date}
        bumps={item.bumps}
        source1={item.source1}
        source2={item.source2}
        context={item.context}
      />
    )
  }

    return (
        <View style={styles.container}>
            <View style={{height: 60, backgroundColor: 'transparent', marginBottom: 60}}/>
            <View style={{alignItems: 'center', marginVertical: 0, justifyContent: 'space-between', flexDirection: 'row', width: Dimensions.get('window').width}}>
                <FontAwesome5 
                    name='chevron-left'
                    color='black'
                    size={20}
                    style={{padding: 20}}
                />
                <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20, textTransform: 'capitalize'}}>
                    {topic.name}
                </Text>
                <FontAwesome 
                    name='hand-paper-o'
                    color='black'
                    size={20}
                    style={{padding: 20}}
                />
            </View>
            <View>
              <FlatList 
                data={data}
                //keyExtractor={item => item.id}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                style={{height: '80%'}}
                ListFooterComponent={
                    <View style={{height: 120}}/>
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

export default Topic;