import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import { colors, spacing, borderRadius } from '../theme';

interface Props {
  label?: string;
  style?: ViewStyle;
}

export const BookButton: React.FC<Props> = ({ label = 'Jetzt Buchen', style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} activeOpacity={1}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.gold,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    borderRadius: borderRadius.sm,
    alignItems: 'center',
  },
  label: {
    color: colors.charcoal,
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});
