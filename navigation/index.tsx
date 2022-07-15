/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import TopicScreen from '../screens/Topic';
import ElectionScreen from '../screens/ElectionScreen';
import TopicsScreen from '../screens/TopicsScreen';
import VideoFeed from '../screens/VideoFeedScreen';
import NewsFeed from '../screens/NewsFeedScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps, TabOneParamList, TabTwoParamList, TabThreeParamList, TabFourParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';



export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      {/* <Stack.Screen name="QuestionsScreen" component={QuestionsScreen} options={{ headerShown: false }} /> */}
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Elections"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        headerShown: false,
        tabBarStyle: {
          elevation: 0,   // for Android
          shadowOffset: {
              width: 0, height: 0 // for iOS
          },
          borderTopWidth: 0
      }
      }}>
      <BottomTab.Screen
        name="Elections"
        component={ElectionsNavigator}
        options={({ navigation }: RootTabScreenProps<'Elections'>) => ({
          title: 'Elections',
          tabBarIcon: ({ color }) => <FontAwesome name="check-square-o" color={color} size={25} />,
          
        })}
      />
      <BottomTab.Screen
        name="VideoFeed"
        component={VideoNavigator}
        options={{
          title: '',
          tabBarIcon: ({ color }) => <FontAwesome5 style={{marginTop: -10}} name="kiwi-bird" color={color} size={32}/>,
        }}
      />
      <BottomTab.Screen
        name="Topics"
        component={TopicsNavigator}
        options={{
          title: '',
          tabBarIcon: ({ color }) => <FontAwesome5 style={{marginTop: -10}} name="egg" color={color} size={32}/>,
        }}
      />
      <BottomTab.Screen
        name="NewsFeed"
        component={NewsFeedNavigator}
        options={{
          title: 'News',
          tabBarIcon: ({ color }) => <FontAwesome name="newspaper-o" color={color} size={25}/>,
        }}
      />
    </BottomTab.Navigator>
  );
}

const ElectionsStack = createNativeStackNavigator<TabOneParamList>();

function ElectionsNavigator() {
  return (
    <ElectionsStack.Navigator>
      <ElectionsStack.Screen
        name="ElectionsHome"
        component={ElectionScreen}
        options={{ headerShown: false }}
      />
    </ElectionsStack.Navigator>
  );
}

const VideoStack = createNativeStackNavigator<TabTwoParamList>();

function VideoNavigator() {
  return (
    <VideoStack.Navigator>
      <VideoStack.Screen
        name="VideoFeedHome"
        component={VideoFeed}
        options={{ headerShown: false }}
      />
    </VideoStack.Navigator>
  );
}

const TopicsStack = createNativeStackNavigator<TabThreeParamList>();

function TopicsNavigator() {
  return (
    <TopicsStack.Navigator>
      <TopicsStack.Screen
        name="TopicsHome"
        component={TopicsScreen}
        options={{ headerShown: false }}
      />
      <TopicsStack.Screen
        name="Topic"
        component={TopicScreen}
        options={{ headerShown: false }}
      />
    </TopicsStack.Navigator>
  );
}

const NewsFeedStack = createNativeStackNavigator<TabFourParamList>();

function NewsFeedNavigator() {
  return (
    <NewsFeedStack.Navigator>
      <NewsFeedStack.Screen
        name="NewsFeedHome"
        component={NewsFeed}
        options={{ headerShown: false }}
      />
    </NewsFeedStack.Navigator>
  );
}
