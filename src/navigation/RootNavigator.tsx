import React from 'react';
import { View, Text } from 'react-native';
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

type FeatherName = React.ComponentProps<typeof Feather>['name'];

function TabIcon({ name, label, focused }: { name: FeatherName; label: string; focused: boolean }) {
  if (focused) {
    return (
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.white,
        borderRadius: 20,
        paddingHorizontal: 11,
        paddingVertical: 7,
        gap: 5,
      }}>
        <Feather name={name} size={15} color={colors.charcoal} />
        <Text style={{
          fontSize: 11,
          fontWeight: '700',
          color: colors.charcoal,
          fontFamily: 'Inter_700Bold',
          letterSpacing: 0.2,
        }}>{label}</Text>
      </View>
    );
  }
  return <Feather name={name} size={20} color="rgba(255,255,255,0.4)" />;
}

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: colors.cream },
        headerTintColor: colors.charcoal,
        headerTitleStyle: {
          fontFamily: 'PlayfairDisplay_700Bold',
          fontSize: 17,
          letterSpacing: 0.5,
        },
        headerShadowVisible: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 20,
          left: 16,
          right: 16,
          borderRadius: 36,
          height: 62,
          backgroundColor: colors.charcoal,
          borderTopWidth: 0,
          paddingBottom: 0,
          paddingTop: 0,
          ...{
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 8 },
            shadowOpacity: 0.28,
            shadowRadius: 20,
            elevation: 16,
          },
        },
        tabBarActiveTintColor: colors.charcoal,
        tabBarInactiveTintColor: 'rgba(255,255,255,0.4)',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabIcon name="home" label="Home" focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Services"
        component={ServicesScreen}
        options={{
          title: 'Leistungen',
          tabBarIcon: ({ focused }) => <TabIcon name="scissors" label="Services" focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Gallery"
        component={GalleryScreen}
        options={{
          title: 'Galerie',
          tabBarIcon: ({ focused }) => <TabIcon name="image" label="Galerie" focused={focused} />,
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{
          title: 'Über uns',
          tabBarIcon: ({ focused }) => <TabIcon name="users" label="Team" focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          title: 'Kontakt',
          tabBarIcon: ({ focused }) => <TabIcon name="map-pin" label="Kontakt" focused={focused} />,
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
            headerStyle: { backgroundColor: colors.charcoal },
            headerTintColor: colors.cream,
            headerTitleStyle: {
              fontFamily: 'PlayfairDisplay_700Bold',
              fontSize: 17,
            },
          }}
        />
        <Stack.Screen
          name="Booking"
          component={BookingScreen}
          options={{
            title: 'Termin buchen',
            headerStyle: { backgroundColor: colors.cream },
            headerTintColor: colors.charcoal,
            headerTitleStyle: {
              fontFamily: 'PlayfairDisplay_700Bold',
              fontSize: 17,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
