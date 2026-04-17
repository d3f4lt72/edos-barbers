import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { colors } from '../theme';
import {
  WelcomeScreen,
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

function TabIcon({ name, color, focused }: { name: React.ComponentProps<typeof Feather>['name']; color: string; focused: boolean }) {
  return (
    <View style={focused
      ? { backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: 20, width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }
      : { width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }
    }>
      <Feather name={name} size={22} color={color} />
    </View>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: colors.cream },
        headerTintColor: colors.charcoal,
        headerTitleStyle: { fontWeight: '700', letterSpacing: 1 },
        headerShadowVisible: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
          borderRadius: 32,
          height: 64,
          backgroundColor: colors.charcoal,
          borderTopWidth: 0,
          elevation: 12,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 6 },
          shadowOpacity: 0.25,
          shadowRadius: 16,
          paddingBottom: 0,
          paddingTop: 0,
        },
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: 'rgba(255,255,255,0.4)',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => <TabIcon name="home" color={color} focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Services"
        component={ServicesScreen}
        options={{
          title: 'Leistungen',
          tabBarIcon: ({ color, focused }) => <TabIcon name="scissors" color={color} focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Gallery"
        component={GalleryScreen}
        options={{
          title: 'Galerie',
          tabBarIcon: ({ color, focused }) => <TabIcon name="image" color={color} focused={focused} />,
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{
          title: 'Über uns',
          tabBarIcon: ({ color, focused }) => <TabIcon name="users" color={color} focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          title: 'Kontakt',
          tabBarIcon: ({ color, focused }) => <TabIcon name="map-pin" color={color} focused={focused} />,
        }}
      />
    </Tab.Navigator>
  );
}

export function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
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
