import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView as SAV } from 'react-native-safe-area-context';
import { colors, spacing, borderRadius, shadows } from '../theme';
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
    <SAV style={{ flex: 1, backgroundColor: colors.cream }} edges={['top']}>
      <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.brand}>EDOS BARBERS</Text>
          <Text style={styles.tagline}>Ihr Premium Barbershop in Wien</Text>
        </View>

        {/* Promo Banner */}
        <View style={styles.promoBanner}>
          <View>
            <Text style={styles.promoTitle}>10% auf Ihren{'\n'}nächsten Schnitt!</Text>
            <Text style={styles.promoSub}>Jetzt Mitglied werden & sparen</Text>
          </View>
          <TouchableOpacity style={styles.promoBtn} onPress={() => navigation.navigate('Membership')}>
            <Text style={styles.promoBtnText}>Entdecken</Text>
          </TouchableOpacity>
        </View>

        {/* CTAs */}
        <View style={styles.ctaRow}>
          <BookButton style={styles.ctaBook} />
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
                <ImagePlaceholder width={160} height={110} style={{ borderRadius: borderRadius.md }} />
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
              <ImagePlaceholder key={i} width={70} height={70} style={{ marginRight: spacing.sm, borderRadius: borderRadius.md }} />
            ))}
          </ScrollView>
        </View>

        <View style={{ height: spacing.xxl }} />
      </ScrollView>
    </SAV>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.cream },
  header: { alignItems: 'center', paddingVertical: spacing.xl, paddingHorizontal: spacing.lg },
  brand: { fontSize: 26, fontWeight: '700', color: colors.charcoal, letterSpacing: 3, fontFamily: 'PlayfairDisplay_700Bold' },
  tagline: { fontSize: 13, color: colors.mutedText, letterSpacing: 1, marginTop: spacing.xs },
  promoBanner: {
    marginHorizontal: spacing.lg,
    marginBottom: spacing.md,
    backgroundColor: colors.charcoal,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  promoTitle: { fontSize: 20, fontWeight: '700', color: '#FFFFFF', lineHeight: 26, marginBottom: spacing.xs, fontFamily: 'PlayfairDisplay_700Bold' },
  promoSub: { fontSize: 12, color: 'rgba(255,255,255,0.65)' },
  promoBtn: {
    backgroundColor: colors.gold,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: borderRadius.full,
  },
  promoBtnText: { fontSize: 13, fontWeight: '700', color: colors.charcoal },
  ctaRow: { flexDirection: 'row', gap: spacing.sm, paddingHorizontal: spacing.lg, marginBottom: spacing.lg },
  ctaBook: { flex: 1, borderRadius: borderRadius.full },
  outlineBtn: {
    flex: 1,
    borderWidth: 1.5,
    borderColor: colors.gold,
    borderRadius: borderRadius.full,
    paddingVertical: spacing.md,
    alignItems: 'center',
  },
  outlineBtnText: { color: colors.charcoal, fontSize: 15, fontWeight: '600' },
  section: { paddingHorizontal: spacing.lg, marginBottom: spacing.xl },
  sectionTitle: { fontSize: 20, fontWeight: '700', color: colors.charcoal, marginBottom: spacing.md, fontFamily: 'PlayfairDisplay_700Bold' },
  newsScroll: { marginHorizontal: -spacing.lg, paddingHorizontal: spacing.lg },
  newsCard: { width: 160, marginRight: spacing.md, backgroundColor: colors.white, borderRadius: borderRadius.md, overflow: 'hidden', ...shadows.card, marginBottom: 4 },
  newsTitle: { fontSize: 13, fontWeight: '600', color: colors.charcoal, marginTop: spacing.sm, paddingHorizontal: spacing.sm },
  newsDesc: { fontSize: 11, color: colors.mutedText, marginTop: 2, paddingHorizontal: spacing.sm, paddingBottom: spacing.sm },
  hoursTable: { backgroundColor: colors.white, borderRadius: borderRadius.md, overflow: 'hidden', ...shadows.card },
  hoursRow: { flexDirection: 'row', justifyContent: 'space-between', padding: spacing.md },
  hoursRowBorder: { borderBottomWidth: 1, borderBottomColor: colors.warmGrey },
  hoursDay: { fontSize: 14, color: colors.charcoal, fontWeight: '500' },
  hoursTime: { fontSize: 14, color: colors.mutedText },
  closed: { color: colors.mutedText, fontStyle: 'italic' },
  instaHandle: { fontSize: 14, fontWeight: '600', color: colors.charcoal, marginBottom: spacing.sm },
});
