/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import ElectionScreen from '../screens/ElectionScreen';
import QuestionsScreen from '../screens/QuestionsScreen';
import VideoFeed from '../screens/VideoFeedScreen';
import NewsFeed from '../screens/NewsFeedScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
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
      <Stack.Screen name="QuestionsScreen" component={QuestionsScreen} options={{ headerShown: false }} />
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
        component={ElectionScreen}
        options={({ navigation }: RootTabScreenProps<'Elections'>) => ({
          title: 'Elections',
          tabBarIcon: ({ color }) => <FontAwesome name="check-square-o" color={color} size={25} />,
          
        })}
      />
      <BottomTab.Screen
        name="VideoFeed"
        component={VideoFeed}
        options={{
          title: '',
          tabBarIcon: ({ color }) => <FontAwesome style={{marginTop: -10}} name="coffee" color={color} size={36}/>,
        }}
      />
      <BottomTab.Screen
        name="NewsFeed"
        component={NewsFeed}
        options={{
          title: 'News',
          tabBarIcon: ({ color }) => <FontAwesome name="newspaper-o" color={color} size={25}/>,
        }}
      />
    </BottomTab.Navigator>
  );
}
