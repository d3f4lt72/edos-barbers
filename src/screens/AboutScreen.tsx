import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors, spacing, shadows } from '../theme';
import { TeamMemberCard } from '../components';
import { team } from '../data/team';

const values = [
  { icon: 'award', label: 'Qualität' },
  { icon: 'scissors', label: 'Stil' },
  { icon: 'heart', label: 'Vertrauen' },
] as const;

export const AboutScreen = () => {
  return (
    <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
      {/* Brand story */}
      <View style={styles.section}>
        <Text style={styles.heading}>Unsere Geschichte</Text>
        <Text style={styles.body}>
          Edos Barbers ist mehr als ein Friseur – es ist ein Ort, an dem Stil und Handwerk aufeinandertreffen.
          Mitten in Simmering, Wien, bieten wir erstklassige Barbier-Dienstleistungen in einer entspannten,
          modernen Atmosphäre. Inspiriert vom LA-Barbershop-Feeling bringen wir Premium-Grooming nach Wien.
        </Text>
        <Text style={[styles.body, { marginTop: spacing.md }]}>
          Unser Team aus erfahrenen Barbieren steht für Präzision, Stil und persönliche Beratung.
          Bei uns sind Sie in den besten Händen – ob klassischer Schnitt, moderner Fade oder perfekte Bartpflege.
        </Text>
      </View>

      {/* Team */}
      <View style={styles.section}>
        <Text style={styles.heading}>Unser Team</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.teamScroll}>
          {team.map(member => (
            <TeamMemberCard key={member.id} name={member.name} role={member.role} />
          ))}
        </ScrollView>
      </View>

      {/* Values */}
      <View style={styles.section}>
        <Text style={styles.heading}>Unsere Werte</Text>
        <View style={styles.valuesRow}>
          {values.map(v => (
            <View key={v.label} style={styles.valueItem}>
              <View style={styles.iconCircle}>
                <Feather name={v.icon} size={22} color={colors.gold} />
              </View>
              <Text style={styles.valueLabel}>{v.label}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={{ height: spacing.xxl }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.cream },
  section: { padding: spacing.lg, marginBottom: spacing.sm },
  heading: { fontSize: 22, fontWeight: '700', color: colors.charcoal, marginBottom: spacing.md },
  body: { fontSize: 15, color: colors.mutedText, lineHeight: 24 },
  teamScroll: { marginHorizontal: -spacing.lg, paddingHorizontal: spacing.lg },
  valuesRow: { flexDirection: 'row', justifyContent: 'space-around', marginTop: spacing.sm },
  valueItem: { alignItems: 'center', flex: 1 },
  iconCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.sm,
    ...shadows.card,
  },
  valueLabel: { fontSize: 13, fontWeight: '600', color: colors.charcoal },
});
