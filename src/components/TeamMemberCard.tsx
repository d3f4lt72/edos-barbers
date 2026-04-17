import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, shadows } from '../theme';
import { ImagePlaceholder } from './ImagePlaceholder';

interface Props {
  name: string;
  role: string;
}

export const TeamMemberCard: React.FC<Props> = ({ name, role }) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarWrapper}>
        <ImagePlaceholder width={88} height={88} circular />
        <View style={styles.goldRing} />
      </View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.role}>{role}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginRight: spacing.lg,
    width: 110,
  },
  avatarWrapper: {
    position: 'relative',
    width: 92,
    height: 92,
    alignItems: 'center',
    justifyContent: 'center',
  },
  goldRing: {
    position: 'absolute',
    top: -2,
    left: -2,
    right: -2,
    bottom: -2,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: colors.gold,
    opacity: 0.6,
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.charcoal,
    fontFamily: 'Inter_500Medium',
    marginTop: spacing.sm,
    textAlign: 'center',
  },
  role: {
    fontSize: 11,
    color: colors.gold,
    fontFamily: 'Inter_400Regular',
    textAlign: 'center',
    marginTop: 2,
    letterSpacing: 0.4,
    textTransform: 'uppercase',
  },
});
