import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { colors, spacing, borderRadius } from '../theme';
import { MembershipCard } from '../components';
import { membershipPlans } from '../data/membership';

export const MembershipScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.charcoal }} edges={['bottom']}>
      <ScrollView
        style={styles.screen}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: spacing.xxl }}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.crownRow}>
            <Feather name="award" size={18} color={colors.gold} style={{ marginRight: spacing.xs }} />
            <Text style={styles.eyebrow}>EDOS MEMBERS CLUB</Text>
          </View>
          <Text style={styles.title}>Invest in{'\n'}your style.</Text>
          <Text style={styles.subtitle}>
            Sparen Sie bei jedem Besuch und genießen Sie exklusive Mitglieder-Vorteile.
          </Text>
        </View>

        {/* Cards */}
        <View style={styles.cards}>
          {membershipPlans.map(plan => (
            <MembershipCard
              key={plan.id}
              title={plan.title}
              price={plan.price}
              period={plan.period}
              perks={plan.perks}
              highlighted={plan.highlighted}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.charcoal },
  header: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.xl,
  },
  crownRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  eyebrow: {
    fontSize: 11,
    color: colors.gold,
    fontFamily: 'Inter_700Bold',
    letterSpacing: 2,
  },
  title: {
    fontSize: 36,
    color: colors.cream,
    fontFamily: 'PlayfairDisplay_700Bold',
    lineHeight: 42,
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: 14,
    color: 'rgba(245,240,232,0.55)',
    fontFamily: 'Inter_400Regular',
    lineHeight: 21,
  },
  cards: {
    paddingHorizontal: spacing.lg,
  },
});
