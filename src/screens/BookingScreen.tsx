import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { colors, spacing, borderRadius, shadows } from '../theme';
import { ImagePlaceholder, BookButton } from '../components';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const TABS = ['Buchung', 'Info', 'Bewertungen'];
const DAYS = [
  { label: 'Mo', date: '14' },
  { label: 'Di', date: '15' },
  { label: 'Mi', date: '16' },
  { label: 'Do', date: '17' },
  { label: 'Fr', date: '18' },
  { label: 'Sa', date: '19' },
  { label: 'So', date: '20' },
];
const TIMES = ['09:00', '10:00', '11:30', '13:00', '14:30', '16:00'];

export const BookingScreen = () => {
  const [activeTab, setActiveTab] = useState('Buchung');
  const [activeDay, setActiveDay] = useState('16');
  const [activeTime, setActiveTime] = useState('11:30');

  return (
    <View style={styles.screen}>
      {/* Hero image */}
      <ImagePlaceholder width="100%" height={SCREEN_HEIGHT * 0.35} style={{ borderRadius: 0, borderWidth: 0 }} />

      {/* White card sheet */}
      <View style={styles.sheet}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>
          {/* Barber info */}
          <View style={styles.barberRow}>
            <View>
              <Text style={styles.barberName}>Edos Barbers</Text>
              <View style={styles.ratingRow}>
                <Feather name="star" size={14} color={colors.gold} />
                <Text style={styles.ratingText}>4.9 (128)</Text>
                <View style={styles.tag}>
                  <Text style={styles.tagText}>Premium Shop</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.heartBtn} activeOpacity={1}>
              <Feather name="heart" size={20} color={colors.gold} />
            </TouchableOpacity>
          </View>

          {/* Tab row */}
          <View style={styles.tabRow}>
            {TABS.map(tab => (
              <TouchableOpacity
                key={tab}
                style={[styles.tabBtn, activeTab === tab && styles.tabBtnActive]}
                onPress={() => setActiveTab(tab)}
              >
                <Text style={[styles.tabBtnText, activeTab === tab && styles.tabBtnTextActive]}>{tab}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {activeTab === 'Buchung' && (
            <>
              {/* Date picker */}
              <View style={styles.pickerSection}>
                <Text style={styles.pickerLabel}>Datum — April 2026</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {DAYS.map(d => (
                    <TouchableOpacity
                      key={d.date}
                      style={[styles.dayBtn, activeDay === d.date && styles.dayBtnActive]}
                      onPress={() => setActiveDay(d.date)}
                    >
                      <Text style={[styles.dayLabel, activeDay === d.date && styles.dayLabelActive]}>{d.label}</Text>
                      <Text style={[styles.dayDate, activeDay === d.date && styles.dayDateActive]}>{d.date}</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>

              {/* Time slots */}
              <View style={styles.pickerSection}>
                <Text style={styles.pickerLabel}>Uhrzeit</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {TIMES.map(t => (
                    <TouchableOpacity
                      key={t}
                      style={[styles.timeBtn, activeTime === t && styles.timeBtnActive]}
                      onPress={() => setActiveTime(t)}
                    >
                      <Text style={[styles.timeText, activeTime === t && styles.timeTextActive]}>{t}</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>

              {/* Summary */}
              <View style={styles.summary}>
                <Feather name="calendar" size={16} color={colors.mutedText} />
                <Text style={styles.summaryText}>  Mittwoch, 16. April · {activeTime} Uhr</Text>
              </View>
            </>
          )}

          {activeTab === 'Info' && (
            <View style={styles.infoSection}>
              <Text style={styles.infoText}>
                Edos Barbers — Ihr Premium Barbershop in Simmering, Wien.{'\n\n'}
                Hauptstraße 3, 1110 Wien{'\n'}
                Mo – Fr: 09:00 – 19:00{'\n'}
                Sa: 09:00 – 17:00{'\n'}
                So: Geschlossen
              </Text>
            </View>
          )}

          {activeTab === 'Bewertungen' && (
            <View style={styles.infoSection}>
              <Text style={styles.infoText}>Bewertungen folgen bald.</Text>
            </View>
          )}
        </ScrollView>

        {/* Bottom CTA */}
        <View style={styles.bottomBar}>
          <BookButton style={{ flex: 1 }} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.cream },
  sheet: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -24,
    paddingTop: spacing.lg,
    paddingHorizontal: spacing.lg,
  },
  barberRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: spacing.md },
  barberName: { fontSize: 24, fontWeight: '700', color: colors.charcoal, fontFamily: 'PlayfairDisplay_700Bold', marginBottom: 4 },
  ratingRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.xs },
  ratingText: { fontSize: 13, color: colors.mutedText, fontWeight: '600' },
  tag: { backgroundColor: colors.warmGrey, paddingHorizontal: spacing.sm, paddingVertical: 2, borderRadius: borderRadius.full },
  tagText: { fontSize: 11, color: colors.gold, fontWeight: '700' },
  heartBtn: { width: 40, height: 40, borderRadius: 20, backgroundColor: colors.warmGrey, alignItems: 'center', justifyContent: 'center' },
  tabRow: { flexDirection: 'row', gap: spacing.sm, marginBottom: spacing.lg },
  tabBtn: { paddingHorizontal: spacing.md, paddingVertical: spacing.sm, borderRadius: borderRadius.full, borderWidth: 1, borderColor: colors.warmGrey },
  tabBtnActive: { backgroundColor: colors.gold, borderColor: colors.gold },
  tabBtnText: { fontSize: 14, color: colors.mutedText, fontWeight: '500' },
  tabBtnTextActive: { color: colors.charcoal, fontWeight: '700' },
  pickerSection: { marginBottom: spacing.lg },
  pickerLabel: { fontSize: 15, fontWeight: '700', color: colors.charcoal, marginBottom: spacing.sm },
  dayBtn: {
    alignItems: 'center', marginRight: spacing.sm,
    width: 52, height: 68,
    backgroundColor: colors.warmGrey, borderRadius: borderRadius.md,
    justifyContent: 'center',
  },
  dayBtnActive: { backgroundColor: colors.gold },
  dayLabel: { fontSize: 11, color: colors.mutedText, fontWeight: '500' },
  dayLabelActive: { color: colors.charcoal },
  dayDate: { fontSize: 18, fontWeight: '700', color: colors.charcoal, marginTop: 2 },
  dayDateActive: { color: colors.charcoal },
  timeBtn: {
    paddingHorizontal: spacing.md, paddingVertical: spacing.sm,
    borderRadius: borderRadius.full, marginRight: spacing.sm,
    backgroundColor: colors.warmGrey,
  },
  timeBtnActive: { backgroundColor: colors.gold },
  timeText: { fontSize: 14, color: colors.mutedText, fontWeight: '500' },
  timeTextActive: { color: colors.charcoal, fontWeight: '700' },
  summary: { flexDirection: 'row', alignItems: 'center', padding: spacing.md, backgroundColor: colors.warmGrey, borderRadius: borderRadius.md, marginBottom: spacing.lg },
  summaryText: { fontSize: 14, color: colors.charcoal, fontWeight: '500' },
  infoSection: { padding: spacing.md, backgroundColor: colors.warmGrey, borderRadius: borderRadius.md },
  infoText: { fontSize: 14, color: colors.mutedText, lineHeight: 22 },
  bottomBar: { position: 'absolute', bottom: 0, left: 0, right: 0, padding: spacing.lg, backgroundColor: colors.white, borderTopWidth: 1, borderTopColor: colors.warmGrey },
});
