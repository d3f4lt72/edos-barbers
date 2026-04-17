import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { colors, spacing } from '../theme';
import { MembershipCard } from '../components';
import { membershipPlans } from '../data/membership';

export const MembershipScreen = () => {
  return (
    <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>Mitgliedschaft</Text>
        <Text style={styles.subtitle}>Werden Sie Mitglied und genießen Sie exklusive Vorteile bei Edos Barbers.</Text>
      </View>
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
      <View style={{ height: spacing.xxl }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.cream },
  header: { padding: spacing.lg, paddingBottom: spacing.md },
  title: { fontSize: 28, fontWeight: '700', color: colors.charcoal, marginBottom: spacing.sm },
  subtitle: { fontSize: 15, color: colors.mutedText, lineHeight: 22 },
  cards: { paddingHorizontal: spacing.lg },
});
