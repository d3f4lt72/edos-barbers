import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors, spacing, borderRadius, shadows } from '../theme';

interface Props {
  title: string;
  price: string;
  period: string;
  perks: string[];
  highlighted?: boolean;
}

function getTierConfig(title: string) {
  if (title === 'Silber' || title === 'Silver') {
    return { accent: '#9E9E9E', emoji: '🥈', tagline: '3 Monate' };
  }
  if (title === 'Diamant' || title === 'Diamond') {
    return { accent: '#6B9DCA', emoji: '💎', tagline: '12 Monate' };
  }
  return { accent: colors.gold, emoji: '🥇', tagline: '6 Monate' };
}

export const MembershipCard: React.FC<Props> = ({ title, price, period, perks, highlighted }) => {
  const tier = getTierConfig(title);

  return (
    <View style={[styles.card, highlighted && styles.highlightedCard]}>
      {/* Top accent bar */}
      <View style={[styles.accentBar, { backgroundColor: tier.accent }]} />

      <View style={styles.body}>
        {/* Tier header */}
        <View style={styles.tierRow}>
          <Text style={styles.tierEmoji}>{tier.emoji}</Text>
          <View style={styles.tierInfo}>
            <Text style={styles.tierTitle}>{title}</Text>
            <Text style={styles.tierPeriod}>{period}</Text>
          </View>
          {highlighted && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>BELIEBT</Text>
            </View>
          )}
        </View>

        {/* Price */}
        <View style={styles.priceRow}>
          <Text style={[styles.price, { color: tier.accent === colors.gold ? colors.gold : tier.accent }]}>{price}</Text>
          <Text style={styles.pricePeriod}> / {period}</Text>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Perks */}
        {perks.map((perk, i) => (
          <View key={i} style={styles.perkRow}>
            <View style={[styles.checkCircle, { borderColor: tier.accent }]}>
              <Feather name="check" size={10} color={tier.accent} />
            </View>
            <Text style={styles.perkText}>{perk}</Text>
          </View>
        ))}

        {/* CTA */}
        <TouchableOpacity
          style={[styles.button, highlighted && styles.highlightedButton]}
          activeOpacity={0.88}
        >
          <Text style={[styles.buttonLabel, highlighted && styles.highlightedButtonLabel]}>
            Auswählen
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    marginBottom: spacing.md,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.warmGrey,
    ...shadows.card,
  },
  highlightedCard: {
    borderColor: colors.gold,
    borderWidth: 1.5,
  },
  accentBar: {
    height: 4,
    width: '100%',
  },
  body: {
    padding: spacing.lg,
  },
  tierRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  tierEmoji: {
    fontSize: 28,
    marginRight: spacing.sm,
  },
  tierInfo: {
    flex: 1,
  },
  tierTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.charcoal,
    fontFamily: 'PlayfairDisplay_700Bold',
    lineHeight: 24,
  },
  tierPeriod: {
    fontSize: 12,
    color: colors.mutedText,
    fontFamily: 'Inter_400Regular',
    marginTop: 1,
  },
  badge: {
    backgroundColor: colors.gold,
    paddingHorizontal: spacing.sm,
    paddingVertical: 3,
    borderRadius: borderRadius.full,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.charcoal,
    fontFamily: 'Inter_700Bold',
    letterSpacing: 0.8,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: spacing.md,
  },
  price: {
    fontSize: 32,
    fontWeight: '700',
    fontFamily: 'Inter_700Bold',
    lineHeight: 36,
  },
  pricePeriod: {
    fontSize: 13,
    color: colors.mutedText,
    fontFamily: 'Inter_400Regular',
  },
  divider: {
    height: 1,
    backgroundColor: colors.warmGrey,
    marginBottom: spacing.md,
  },
  perkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  checkCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.sm,
    flexShrink: 0,
  },
  perkText: {
    fontSize: 13,
    color: colors.charcoal,
    fontFamily: 'Inter_400Regular',
    flex: 1,
    lineHeight: 18,
  },
  button: {
    marginTop: spacing.md,
    borderWidth: 1.5,
    borderColor: colors.charcoal,
    borderRadius: borderRadius.full,
    paddingVertical: spacing.sm + 2,
    alignItems: 'center',
  },
  highlightedButton: {
    backgroundColor: colors.charcoal,
    borderColor: colors.charcoal,
  },
  buttonLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.charcoal,
    fontFamily: 'Inter_500Medium',
    letterSpacing: 0.3,
  },
  highlightedButtonLabel: {
    color: colors.white,
  },
});
