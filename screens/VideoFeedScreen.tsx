import {useState} from 'react';

import { 
  StyleSheet, 
  TouchableWithoutFeedback,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Text, View } from '../components/Themed';

const VideoFeed = ({navigation}:any) => {

  const SCREEN_HEIGHT = Dimensions.get('window').height

  const [optionsVis, setOptionsVis] = useState(false);

  const [didAgree, setDidAgree] = useState(false);

  const [didNotAgree, setDidNotAgree] = useState(false);

  const Agree = () => {
    if (didAgree === true) {
      setDidAgree(false);
    }
    if (didAgree === false) {
      setDidAgree(true);
      setDidNotAgree(false);
    }
  }

  const NotAgree = () => {
    if (didNotAgree === true) {
      setDidNotAgree(false);
    }
    if (didNotAgree === false) {
      setDidNotAgree(true);
      setDidAgree(false);
    }
  }

  return (
    <View style={styles.container}>

      {optionsVis === true ? (
        <TouchableWithoutFeedback onPress={() => setOptionsVis(!optionsVis)}>
          <View style={{alignItems: 'center', justifyContent: 'center', backgroundColor: '#141414a5', paddingTop: 30, width: '100%', height: SCREEN_HEIGHT}}>
            
            <View />

            <View style={{justifyContent: 'space-around', flexDirection: 'row', backgroundColor: 'transparent', width: '100%',}}>
              
              <TouchableOpacity onPress={NotAgree}>
                <FontAwesome name='thumbs-down' color={didNotAgree === true ? '#000' : '#fff'} size={30} style={{padding: 20, borderWidth: 0.5, borderColor: didNotAgree === true ? 'green' : '#fff', borderRadius: 15, backgroundColor: didNotAgree === true ? 'green' : 'transparent'}}/>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={Agree}>
                <FontAwesome name='thumbs-up' color={didAgree === true ? '#000' : '#fff'} size={30} style={{padding: 20, borderWidth: 0.5, borderColor: didAgree === true ? 'green' : '#fff', borderRadius: 15, backgroundColor: didAgree === true ? 'green' : 'transparent'}}/>
              </TouchableOpacity>

            </View>
            
          </View>
        </TouchableWithoutFeedback>
      ) : null}
      
      

      <TouchableWithoutFeedback onPress={() => setOptionsVis(!optionsVis)}>
        <View style={{flexDirection: 'row', backgroundColor: '#141414a5', position: 'absolute', top: 0, paddingTop: 40, width: '100%'}}>
        <View style={{backgroundColor: 'transparent', marginLeft: 10}}>
              <TouchableWithoutFeedback>
                <FontAwesome 
                  name='globe'
                  size={20}
                  color='white'
                  style={{
                    padding: 10,
                    backgroundColor: 'transparent',
                  }}
                  />
                </TouchableWithoutFeedback>
            </View>
          <Text style={{color: '#fff', paddingHorizontal: 10, paddingBottom: 10, width: '85%'}}>
            How do you feel about nationalizing gasoline refinement to bring prices down? What happens if this is three lines?
          </Text>
        </View>
      </TouchableWithoutFeedback>
      

      <View style={{backgroundColor: '#141414a5', position: 'absolute', bottom: 0, width: '100%', padding: 10}}>
        <Text style={{color: '#fff'}}>
          Politician Name
        </Text>
        <Text style={{color: '#fff'}}>
          Political Position
        </Text>
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

export default VideoFeed;
