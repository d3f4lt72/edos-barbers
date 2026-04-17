import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
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
      {/* Hero */}
      <ImagePlaceholder
        width="100%"
        height={SCREEN_HEIGHT * 0.35}
        style={{ borderRadius: 0, borderWidth: 0 }}
      />

      {/* Sheet */}
      <View style={styles.sheet}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>

          {/* Shop info */}
          <View style={styles.shopRow}>
            <View style={styles.shopInfo}>
              <Text style={styles.shopName}>Edos Barbers</Text>
              <View style={styles.ratingRow}>
                <Feather name="star" size={13} color={colors.gold} />
                <Text style={styles.ratingText}>4.9 · 128 Bewertungen</Text>
                <View style={styles.tag}>
                  <Text style={styles.tagText}>Premium Shop</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.heartBtn} activeOpacity={0.8}>
              <Feather name="heart" size={19} color={colors.gold} />
            </TouchableOpacity>
          </View>

          {/* Section tabs */}
          <View style={styles.tabRow}>
            {TABS.map(tab => (
              <TouchableOpacity
                key={tab}
                style={[styles.tabBtn, activeTab === tab && styles.tabBtnActive]}
                onPress={() => setActiveTab(tab)}
                activeOpacity={0.85}
              >
                <Text style={[styles.tabBtnText, activeTab === tab && styles.tabBtnTextActive]}>
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {activeTab === 'Buchung' && (
            <>
              {/* Date */}
              <View style={styles.pickerSection}>
                <Text style={styles.pickerLabel}>Datum — April 2026</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {DAYS.map(d => (
                    <TouchableOpacity
                      key={d.date}
                      style={[styles.dayBtn, activeDay === d.date && styles.dayBtnActive]}
                      onPress={() => setActiveDay(d.date)}
                      activeOpacity={0.85}
                    >
                      <Text style={[styles.dayLabel, activeDay === d.date && styles.dayLabelActive]}>
                        {d.label}
                      </Text>
                      <Text style={[styles.dayDate, activeDay === d.date && styles.dayDateActive]}>
                        {d.date}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>

              {/* Time */}
              <View style={styles.pickerSection}>
                <Text style={styles.pickerLabel}>Uhrzeit</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {TIMES.map(t => (
                    <TouchableOpacity
                      key={t}
                      style={[styles.timeBtn, activeTime === t && styles.timeBtnActive]}
                      onPress={() => setActiveTime(t)}
                      activeOpacity={0.85}
                    >
                      <Text style={[styles.timeText, activeTime === t && styles.timeTextActive]}>{t}</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>

              {/* Summary */}
              <View style={styles.summary}>
                <Feather name="calendar" size={15} color={colors.gold} />
                <Text style={styles.summaryText}>
                  {'  '}Mittwoch, 16. April · {activeTime} Uhr
                </Text>
              </View>
            </>
          )}

          {activeTab === 'Info' && (
            <View style={styles.infoSection}>
              <Text style={styles.infoText}>
                {'Edos Barbers — Ihr Premium Barbershop in Simmering, Wien.\n\n'}
                {'Hauptstraße 3, 1110 Wien\n'}
                {'Mo – Fr: 09:00 – 19:00\n'}
                {'Sa: 09:00 – 17:00\n'}
                {'So: Geschlossen'}
              </Text>
            </View>
          )}

          {activeTab === 'Bewertungen' && (
            <View style={styles.infoSection}>
              <Text style={styles.infoText}>Bewertungen folgen bald.</Text>
            </View>
          )}
        </ScrollView>

        {/* CTA */}
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
    borderTopLeftRadius: borderRadius.xl,
    borderTopRightRadius: borderRadius.xl,
    marginTop: -borderRadius.xl,
    paddingTop: spacing.lg,
    paddingHorizontal: spacing.lg,
    ...shadows.float,
  },

  shopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.md,
  },
  shopInfo: { flex: 1 },
  shopName: {
    fontSize: 22,
    fontFamily: 'PlayfairDisplay_700Bold',
    color: colors.charcoal,
    marginBottom: 5,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: spacing.xs,
  },
  ratingText: {
    fontSize: 13,
    color: colors.mutedText,
    fontFamily: 'Inter_400Regular',
  },
  tag: {
    backgroundColor: colors.warmGrey,
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    borderRadius: borderRadius.full,
  },
  tagText: {
    fontSize: 11,
    color: colors.gold,
    fontFamily: 'Inter_700Bold',
  },
  heartBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.warmGrey,
    alignItems: 'center',
    justifyContent: 'center',
  },

  tabRow: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginBottom: spacing.lg,
  },
  tabBtn: {
    paddingHorizontal: spacing.md,
    paddingVertical: 9,
    borderRadius: borderRadius.full,
    backgroundColor: colors.warmGrey,
  },
  tabBtnActive: {
    backgroundColor: colors.charcoal,
  },
  tabBtnText: {
    fontSize: 13,
    color: colors.mutedText,
    fontFamily: 'Inter_500Medium',
  },
  tabBtnTextActive: {
    color: colors.cream,
    fontFamily: 'Inter_700Bold',
  },

  pickerSection: { marginBottom: spacing.lg },
  pickerLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.charcoal,
    fontFamily: 'Inter_700Bold',
    marginBottom: spacing.sm,
  },

  dayBtn: {
    alignItems: 'center',
    marginRight: spacing.sm,
    width: 52,
    height: 68,
    backgroundColor: colors.warmGrey,
    borderRadius: borderRadius.md,
    justifyContent: 'center',
  },
  dayBtnActive: { backgroundColor: colors.gold },
  dayLabel: {
    fontSize: 11,
    color: colors.mutedText,
    fontFamily: 'Inter_400Regular',
  },
  dayLabelActive: { color: colors.charcoal },
  dayDate: {
    fontSize: 19,
    fontWeight: '700',
    color: colors.charcoal,
    fontFamily: 'Inter_700Bold',
    marginTop: 3,
  },
  dayDateActive: { color: colors.charcoal },

  timeBtn: {
    paddingHorizontal: spacing.md,
    paddingVertical: 10,
    borderRadius: borderRadius.full,
    marginRight: spacing.sm,
    backgroundColor: colors.warmGrey,
  },
  timeBtnActive: { backgroundColor: colors.gold },
  timeText: {
    fontSize: 14,
    color: colors.mutedText,
    fontFamily: 'Inter_500Medium',
  },
  timeTextActive: {
    color: colors.charcoal,
    fontFamily: 'Inter_700Bold',
  },

  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.md,
    backgroundColor: colors.warmGrey,
    borderRadius: borderRadius.md,
    marginBottom: spacing.lg,
  },
  summaryText: {
    fontSize: 14,
    color: colors.charcoal,
    fontFamily: 'Inter_500Medium',
  },

  infoSection: {
    padding: spacing.md,
    backgroundColor: colors.warmGrey,
    borderRadius: borderRadius.md,
  },
  infoText: {
    fontSize: 14,
    color: colors.mutedText,
    fontFamily: 'Inter_400Regular',
    lineHeight: 22,
  },

  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: spacing.lg,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.warmGrey,
  },
});
