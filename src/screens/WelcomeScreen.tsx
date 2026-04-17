import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors, spacing, borderRadius } from '../theme';

const { height } = Dimensions.get('window');

export const WelcomeScreen = ({ navigation }: any) => {
  return (
    <ImageBackground
      source={require('../../assets/photo.png')}
      style={styles.bg}
      resizeMode="cover"
    >
      {/* Dark overlay */}
      <View style={styles.overlay} />

      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Bottom content */}
      <View style={styles.content}>
        <Text style={styles.headline}>Ihr Stil.{'\n'}Ihr Auftritt.</Text>
        <Text style={styles.subtitle}>Premium Barbershop in Simmering, Wien.</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.replace('MainTabs')}>
          <Feather name="scissors" size={18} color={colors.charcoal} style={{ marginRight: spacing.sm }} />
          <Text style={styles.buttonLabel}>Loslegen</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bg: { flex: 1, width: '100%', height: '100%' },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.55)',
  },
  logoContainer: {
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  logo: {
    width: 140,
    height: 80,
    tintColor: '#FFFFFF',
  },
  content: {
    position: 'absolute',
    bottom: 60,
    left: spacing.xl,
    right: spacing.xl,
  },
  headline: {
    fontSize: 44,
    fontWeight: '700',
    color: '#FFFFFF',
    lineHeight: 52,
    marginBottom: spacing.md,
    fontFamily: 'PlayfairDisplay_700Bold',
  },
  subtitle: {
    fontSize: 15,
    color: 'rgba(255,255,255,0.75)',
    marginBottom: spacing.xl,
    lineHeight: 22,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.gold,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    borderRadius: borderRadius.full,
    alignSelf: 'flex-start',
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.charcoal,
  },
});
