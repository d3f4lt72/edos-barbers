import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { colors, spacing, borderRadius, shadows } from '../theme';
import { TeamMemberCard } from '../components';
import { team } from '../data/team';

const values = [
  { icon: 'award', label: 'Qualität', desc: 'Höchste Standards bei jedem Schnitt' },
  { icon: 'scissors', label: 'Stil', desc: 'Moderne Trends trifft Klassik' },
  { icon: 'heart', label: 'Vertrauen', desc: 'Ihr Wohl steht an erster Stelle' },
] as const;

export const AboutScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.cream }} edges={['bottom']}>
      <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>

        {/* Story */}
        <View style={styles.section}>
          <Text style={styles.eyebrow}>UNSERE GESCHICHTE</Text>
          <Text style={styles.heading}>Premium Grooming{'\n'}in Wien.</Text>
          <Text style={styles.body}>
            Edos Barbers ist mehr als ein Friseur – es ist ein Ort, an dem Stil und
            Handwerk aufeinandertreffen. Mitten in Simmering, Wien, bieten wir
            erstklassige Barbier-Dienstleistungen in einer entspannten, modernen
            Atmosphäre.
          </Text>
          <Text style={[styles.body, { marginTop: spacing.md }]}>
            Inspiriert vom LA-Barbershop-Feeling bringen wir Premium-Grooming nach
            Wien. Unser Team steht für Präzision, Stil und persönliche Beratung.
          </Text>
        </View>

        {/* Team */}
        <View style={[styles.section, { paddingHorizontal: 0 }]}>
          <View style={styles.sectionHeaderPadded}>
            <Text style={styles.sectionTitle}>Unser Team</Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.teamScroll}
          >
            {team.map(member => (
              <TeamMemberCard key={member.id} name={member.name} role={member.role} />
            ))}
          </ScrollView>
        </View>

        {/* Values */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Unsere Werte</Text>
          <View style={styles.valuesCol}>
            {values.map((v, i) => (
              <View key={v.label} style={[styles.valueCard, i < values.length - 1 && styles.valueCardBorder]}>
                <View style={styles.iconBox}>
                  <Feather name={v.icon} size={18} color={colors.gold} />
                </View>
                <View style={styles.valueText}>
                  <Text style={styles.valueLabel}>{v.label}</Text>
                  <Text style={styles.valueDesc}>{v.desc}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        <View style={{ height: 110 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.cream },

  section: {
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.xl,
  },
  eyebrow: {
    fontSize: 11,
    color: colors.gold,
    fontFamily: 'Inter_700Bold',
    letterSpacing: 2,
    marginBottom: spacing.sm,
  },
  heading: {
    fontSize: 30,
    color: colors.charcoal,
    fontFamily: 'PlayfairDisplay_700Bold',
    lineHeight: 36,
    marginBottom: spacing.md,
  },
  body: {
    fontSize: 14,
    color: colors.mutedText,
    fontFamily: 'Inter_400Regular',
    lineHeight: 22,
  },
  sectionHeaderPadded: {
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.md,
  },
  sectionTitle: {
    fontSize: 20,
    color: colors.charcoal,
    fontFamily: 'PlayfairDisplay_700Bold',
  },
  teamScroll: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xs,
  },

  valuesCol: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.md,
    overflow: 'hidden',
    marginTop: spacing.md,
    ...shadows.card,
  },
  valueCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.md,
  },
  valueCardBorder: {
    borderBottomWidth: 1,
    borderBottomColor: colors.warmGrey,
  },
  iconBox: {
    width: 42,
    height: 42,
    borderRadius: borderRadius.sm,
    backgroundColor: colors.warmGrey,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
    flexShrink: 0,
  },
  valueText: { flex: 1 },
  valueLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.charcoal,
    fontFamily: 'Inter_500Medium',
    marginBottom: 2,
  },
  valueDesc: {
    fontSize: 12,
    color: colors.mutedText,
    fontFamily: 'Inter_400Regular',
  },
});
