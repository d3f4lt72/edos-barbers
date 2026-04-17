import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing, borderRadius } from '../theme';
import { ImagePlaceholder, BookButton } from '../components';

const newsItems = [
  { id: '1', title: 'Neues Styling-Angebot', description: 'Jetzt Summer Fade buchen' },
  { id: '2', title: 'Verlängerte Öffnungszeiten', description: 'Jetzt auch samstags bis 18 Uhr' },
  { id: '3', title: 'Mitgliedschaft', description: 'Jetzt Mitglied werden & sparen' },
];

const hours = [
  { day: 'Mo – Fr', time: '09:00 – 19:00' },
  { day: 'Samstag', time: '09:00 – 17:00' },
  { day: 'Sonntag', time: 'Geschlossen' },
];

export const HomeScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.cream }}>
    <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.brand}>EDOS BARBERS</Text>
        <Text style={styles.tagline}>Ihr Premium Barbershop in Wien</Text>
      </View>

      {/* Hero */}
      <ImagePlaceholder width="100%" height={220} style={{ borderRadius: 0, borderLeftWidth: 0, borderRightWidth: 0 }} />

      {/* CTAs */}
      <View style={styles.ctaRow}>
        <BookButton style={{ flex: 1 }} />
        <TouchableOpacity style={styles.outlineBtn} onPress={() => navigation.navigate('Membership')}>
          <Text style={styles.outlineBtnText}>Mitgliedschaft</Text>
        </TouchableOpacity>
      </View>

      {/* What's New */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Was gibt's Neues</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.newsScroll}>
          {newsItems.map(item => (
            <View key={item.id} style={styles.newsCard}>
              <ImagePlaceholder width={180} height={120} />
              <Text style={styles.newsTitle}>{item.title}</Text>
              <Text style={styles.newsDesc}>{item.description}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Opening hours */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Öffnungszeiten</Text>
        <View style={styles.hoursTable}>
          {hours.map((h, i) => (
            <View key={i} style={[styles.hoursRow, i < hours.length - 1 && styles.hoursRowBorder]}>
              <Text style={styles.hoursDay}>{h.day}</Text>
              <Text style={[styles.hoursTime, h.time === 'Geschlossen' && styles.closed]}>{h.time}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Instagram */}
      <View style={styles.section}>
        <Text style={styles.instaHandle}>@edosbarbers</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {Array.from({ length: 6 }).map((_, i) => (
            <ImagePlaceholder key={i} width={70} height={70} style={{ marginRight: spacing.sm }} />
          ))}
        </ScrollView>
      </View>

      <View style={{ height: spacing.xxl }} />
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.cream },
  header: { alignItems: 'center', paddingVertical: spacing.xl, paddingHorizontal: spacing.lg },
  brand: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.charcoal,
    letterSpacing: 3,
    fontFamily: 'PlayfairDisplay_700Bold',
  },
  tagline: { fontSize: 14, color: colors.mutedText, letterSpacing: 1, marginTop: spacing.xs },
  ctaRow: { flexDirection: 'row', gap: spacing.sm, padding: spacing.lg },
  outlineBtn: {
    flex: 1,
    borderWidth: 1.5,
    borderColor: colors.gold,
    borderRadius: borderRadius.sm,
    paddingVertical: spacing.md,
    alignItems: 'center',
  },
  outlineBtnText: { color: colors.charcoal, fontSize: 16, fontWeight: '600' },
  section: { paddingHorizontal: spacing.lg, marginBottom: spacing.xl },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.charcoal,
    marginBottom: spacing.md,
    fontFamily: 'PlayfairDisplay_700Bold',
  },
  newsScroll: { marginHorizontal: -spacing.lg, paddingHorizontal: spacing.lg },
  newsCard: { width: 180, marginRight: spacing.md },
  newsTitle: { fontSize: 14, fontWeight: '600', color: colors.charcoal, marginTop: spacing.sm },
  newsDesc: { fontSize: 12, color: colors.mutedText, marginTop: 2 },
  hoursTable: { backgroundColor: colors.white, borderRadius: borderRadius.md, overflow: 'hidden' },
  hoursRow: { flexDirection: 'row', justifyContent: 'space-between', padding: spacing.md },
  hoursRowBorder: { borderBottomWidth: 1, borderBottomColor: colors.warmGrey },
  hoursDay: { fontSize: 14, color: colors.charcoal, fontWeight: '500' },
  hoursTime: { fontSize: 14, color: colors.mutedText },
  closed: { color: colors.mutedText, fontStyle: 'italic' },
  instaHandle: { fontSize: 14, fontWeight: '600', color: colors.charcoal, marginBottom: spacing.sm },
});
