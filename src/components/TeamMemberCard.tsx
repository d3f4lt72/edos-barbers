import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing } from '../theme';
import { ImagePlaceholder } from './ImagePlaceholder';

interface Props {
  name: string;
  role: string;
}

export const TeamMemberCard: React.FC<Props> = ({ name, role }) => {
  return (
    <View style={styles.container}>
      <ImagePlaceholder width={80} height={80} circular />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.role}>{role}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginRight: spacing.lg,
    width: 100,
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.charcoal,
    marginTop: spacing.sm,
    textAlign: 'center',
  },
  role: {
    fontSize: 12,
    color: colors.mutedText,
    textAlign: 'center',
    marginTop: 2,
  },
});
