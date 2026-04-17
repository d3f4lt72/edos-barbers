import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { colors } from '../theme';
import {
  HomeScreen,
  ServicesScreen,
  GalleryScreen,
  AboutScreen,
  ContactScreen,
  MembershipScreen,
  BookingScreen,
} from '../screens';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: colors.cream },
        headerTintColor: colors.charcoal,
        headerTitleStyle: { fontWeight: '700', letterSpacing: 1 },
        headerShadowVisible: false,
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopColor: colors.warmGrey,
          borderTopWidth: 1,
          paddingBottom: 4,
          height: 60,
        },
        tabBarActiveTintColor: colors.gold,
        tabBarInactiveTintColor: colors.mutedText,
        tabBarLabelStyle: { fontSize: 11, fontWeight: '600' },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false, tabBarLabel: 'Start', tabBarIcon: ({ color, size }) => <Feather name="home" size={size} color={color} /> }}
      />
      <Tab.Screen
        name="Services"
        component={ServicesScreen}
        options={{ title: 'Leistungen', tabBarLabel: 'Leistungen', tabBarIcon: ({ color, size }) => <Feather name="scissors" size={size} color={color} /> }}
      />
      <Tab.Screen
        name="Gallery"
        component={GalleryScreen}
        options={{ title: 'Galerie', tabBarLabel: 'Galerie', tabBarIcon: ({ color, size }) => <Feather name="image" size={size} color={color} /> }}
      />
      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{ title: 'Über uns', tabBarLabel: 'Über uns', tabBarIcon: ({ color, size }) => <Feather name="users" size={size} color={color} /> }}
      />
      <Tab.Screen
        name="Contact"
        component={ContactScreen}
        options={{ title: 'Kontakt', tabBarLabel: 'Kontakt', tabBarIcon: ({ color, size }) => <Feather name="map-pin" size={size} color={color} /> }}
      />
    </Tab.Navigator>
  );
}

export function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
        <Stack.Screen
          name="Membership"
          component={MembershipScreen}
          options={{
            title: 'Mitgliedschaft',
            headerStyle: { backgroundColor: colors.cream },
            headerTintColor: colors.charcoal,
            headerTitleStyle: { fontWeight: '700' },
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="Booking"
          component={BookingScreen}
          options={{
            title: 'Termin buchen',
            headerStyle: { backgroundColor: colors.cream },
            headerTintColor: colors.charcoal,
            headerTitleStyle: { fontWeight: '700' },
            headerBackTitleVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
