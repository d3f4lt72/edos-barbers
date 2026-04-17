import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, shadows } from '../theme';

interface Props {
  title: string;
  price: string;
  period: string;
  perks: string[];
  highlighted?: boolean;
}

export const MembershipCard: React.FC<Props> = ({ title, price, period, perks, highlighted }) => {
  return (
    <View style={[styles.card, highlighted && styles.highlighted]}>
      {highlighted && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Beliebteste Wahl</Text>
        </View>
      )}
      <Text style={[styles.title, highlighted && styles.highlightedTitle]}>{title}</Text>
      <View style={styles.priceRow}>
        <Text style={styles.price}>{price}</Text>
        <Text style={styles.period}> / {period}</Text>
      </View>
      {perks.map((perk, i) => (
        <Text key={i} style={styles.perk}>• {perk}</Text>
      ))}
      {/* Dead button for V1 — no booking integration yet */}
      <TouchableOpacity style={[styles.button, highlighted && styles.highlightedButton]} activeOpacity={1}>
        <Text style={[styles.buttonLabel, highlighted && styles.highlightedButtonLabel]}>Auswählen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.warmGrey,
    ...shadows.card,
  },
  highlighted: {
    borderColor: colors.gold,
    borderWidth: 2,
  },
  badge: {
    backgroundColor: colors.gold,
    alignSelf: 'flex-start',
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: borderRadius.sm,
    marginBottom: spacing.sm,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.charcoal,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.charcoal,
    marginBottom: spacing.xs,
  },
  highlightedTitle: {
    color: colors.charcoal,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: spacing.md,
  },
  price: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.gold,
  },
  period: {
    fontSize: 14,
    color: colors.mutedText,
  },
  perk: {
    fontSize: 14,
    color: colors.mutedText,
    marginBottom: spacing.xs,
  },
  button: {
    marginTop: spacing.md,
    borderWidth: 1.5,
    borderColor: colors.charcoal,
    borderRadius: borderRadius.sm,
    paddingVertical: spacing.sm,
    alignItems: 'center',
  },
  highlightedButton: {
    backgroundColor: colors.charcoal,
    borderColor: colors.charcoal,
  },
  buttonLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.charcoal,
  },
  highlightedButtonLabel: {
    color: colors.white,
  },
});
