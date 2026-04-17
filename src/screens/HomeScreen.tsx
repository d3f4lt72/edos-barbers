import React, { useState } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity, StyleSheet,
  TextInput, Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { colors, spacing, borderRadius, shadows } from '../theme';
import { ImagePlaceholder } from '../components';

const { width: SCREEN_W } = Dimensions.get('window');
const CARD_W = (SCREEN_W - spacing.lg * 2 - spacing.sm) / 2;

const newsItems = [
  { id: '1', title: 'Neues Styling-Angebot', description: 'Jetzt Summer Fade buchen' },
  { id: '2', title: 'Verlängerte Öffnungszeiten', description: 'Jetzt auch samstags bis 18 Uhr' },
  { id: '3', title: 'Mitgliedschaft', description: 'Jetzt Mitglied werden & sparen' },
];

const hours = [
  { day: 'Mo – Fr', time: '09:00 – 19:00', today: false },
  { day: 'Samstag', time: '09:00 – 17:00', today: false },
  { day: 'Sonntag', time: 'Geschlossen', today: false },
];

const featuredServices = [
  { id: 'f1', name: 'Classic Cut', price: '€18' },
  { id: 'f2', name: 'Fade', price: '€22' },
  { id: 'f3', name: 'Bart Trimmen', price: '€12' },
  { id: 'f4', name: 'Premium Kombi', price: '€35' },
];

export const HomeScreen = ({ navigation }: any) => {
  const [search, setSearch] = useState('');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.cream }} edges={['top']}>
      <ScrollView
        style={styles.screen}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 110 }}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Willkommen zurück</Text>
            <Text style={styles.brand}>EDOS BARBERS</Text>
          </View>
          <TouchableOpacity style={styles.bellBtn} activeOpacity={0.8}>
            <Feather name="bell" size={19} color={colors.charcoal} />
          </TouchableOpacity>
        </View>

        {/* Search */}
        <View style={styles.searchRow}>
          <View style={styles.searchBar}>
            <Feather name="search" size={16} color={colors.mutedText} style={{ marginRight: spacing.sm }} />
            <TextInput
              style={styles.searchInput}
              placeholder="Leistung oder Barbier suchen..."
              placeholderTextColor={colors.mutedText}
              value={search}
              onChangeText={setSearch}
              editable={false}
            />
          </View>
          <TouchableOpacity style={styles.filterBtn} activeOpacity={0.8}>
            <Feather name="sliders" size={17} color={colors.charcoal} />
          </TouchableOpacity>
        </View>

        {/* Promo Banner */}
        <TouchableOpacity
          style={styles.promoBanner}
          activeOpacity={0.92}
          onPress={() => navigation.navigate('Membership')}
        >
          <View style={styles.promoLeft}>
            <Text style={styles.promoLabel}>ANGEBOT</Text>
            <Text style={styles.promoTitle}>10% auf Ihren{'\n'}nächsten Schnitt!</Text>
            <Text style={styles.promoSub}>Jetzt Mitglied werden & sparen</Text>
            <View style={styles.promoBtn}>
              <Text style={styles.promoBtnText}>Jetzt buchen</Text>
            </View>
          </View>
          <ImagePlaceholder
            width={105}
            height={105}
            style={{ borderRadius: borderRadius.md, flexShrink: 0 }}
          />
        </TouchableOpacity>

        {/* Featured Services */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Beliebte Leistungen</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Services')} activeOpacity={0.7}>
              <Text style={styles.seeAll}>Alle anzeigen</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.gridRow}>
            {featuredServices.map((service, index) => (
              <View
                key={service.id}
                style={[
                  styles.gridCard,
                  { width: CARD_W },
                  index % 2 === 0 ? { marginRight: spacing.sm } : {},
                ]}
              >
                <ImagePlaceholder
                  width="100%"
                  height={115}
                  style={{ borderTopLeftRadius: borderRadius.md, borderTopRightRadius: borderRadius.md, borderRadius: 0 }}
                />
                <View style={styles.gridCardBody}>
                  <View style={styles.gridCardText}>
                    <Text style={styles.gridCardName}>{service.name}</Text>
                    <Text style={styles.gridCardPrice}>{service.price}</Text>
                  </View>
                  <TouchableOpacity style={styles.plusBtn} activeOpacity={0.85}>
                    <Feather name="plus" size={15} color={colors.charcoal} />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* What's New */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Was gibt's Neues</Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.newsScroll}
            contentContainerStyle={{ paddingRight: spacing.lg }}
          >
            {newsItems.map(item => (
              <TouchableOpacity key={item.id} style={styles.newsCard} activeOpacity={0.88}>
                <ImagePlaceholder
                  width={190}
                  height={115}
                  style={{ borderTopLeftRadius: borderRadius.md, borderTopRightRadius: borderRadius.md, borderRadius: 0 }}
                />
                <View style={styles.newsBody}>
                  <Text style={styles.newsTitle}>{item.title}</Text>
                  <Text style={styles.newsDesc}>{item.description}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Opening Hours */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Öffnungszeiten</Text>
          </View>
          <View style={styles.hoursCard}>
            {hours.map((h, i) => (
              <View
                key={i}
                style={[
                  styles.hoursRow,
                  i < hours.length - 1 && styles.hoursRowBorder,
                ]}
              >
                <View style={styles.hoursLeft}>
                  {i === 0 && <View style={styles.openDot} />}
                  <Text style={styles.hoursDay}>{h.day}</Text>
                </View>
                <Text style={[styles.hoursTime, h.time === 'Geschlossen' && styles.closed]}>
                  {h.time}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Instagram */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.instaRow}>
              <Feather name="instagram" size={16} color={colors.charcoal} style={{ marginRight: 6 }} />
              <Text style={styles.instaHandle}>@edosbarbers</Text>
            </View>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.seeAll}>Profil ansehen</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {Array.from({ length: 6 }).map((_, i) => (
              <ImagePlaceholder
                key={i}
                width={76}
                height={76}
                style={{ marginRight: spacing.sm, borderRadius: borderRadius.sm }}
              />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.cream },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: spacing.sm,
  },
  greeting: {
    fontSize: 12,
    color: colors.mutedText,
    fontFamily: 'Inter_400Regular',
    letterSpacing: 0.3,
  },
  brand: {
    fontSize: 21,
    color: colors.charcoal,
    letterSpacing: 2.5,
    fontFamily: 'PlayfairDisplay_700Bold',
    marginTop: 1,
  },
  bellBtn: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.card,
  },

  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.lg,
    gap: spacing.sm,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: borderRadius.full,
    paddingHorizontal: spacing.md,
    paddingVertical: 11,
    ...shadows.card,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: colors.charcoal,
    fontFamily: 'Inter_400Regular',
  },
  filterBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.card,
  },

  promoBanner: {
    marginHorizontal: spacing.lg,
    marginBottom: spacing.xl,
    backgroundColor: colors.charcoal,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  promoLeft: { flex: 1 },
  promoLabel: {
    fontSize: 10,
    color: colors.gold,
    fontFamily: 'Inter_700Bold',
    letterSpacing: 1.5,
    marginBottom: 6,
  },
  promoTitle: {
    fontSize: 19,
    color: colors.cream,
    fontFamily: 'PlayfairDisplay_700Bold',
    lineHeight: 25,
    marginBottom: spacing.xs,
  },
  promoSub: {
    fontSize: 12,
    color: 'rgba(245,240,232,0.55)',
    fontFamily: 'Inter_400Regular',
    marginBottom: spacing.md,
  },
  promoBtn: {
    backgroundColor: colors.gold,
    paddingVertical: 9,
    paddingHorizontal: spacing.md,
    borderRadius: borderRadius.full,
    alignSelf: 'flex-start',
  },
  promoBtnText: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.charcoal,
    fontFamily: 'Inter_700Bold',
  },

  section: { paddingHorizontal: spacing.lg, marginBottom: spacing.xl },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  sectionTitle: {
    fontSize: 17,
    color: colors.charcoal,
    fontFamily: 'PlayfairDisplay_700Bold',
  },
  seeAll: {
    fontSize: 13,
    color: colors.gold,
    fontFamily: 'Inter_500Medium',
  },

  gridRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  gridCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.md,
    overflow: 'hidden',
    marginBottom: spacing.sm,
    ...shadows.card,
  },
  gridCardBody: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: spacing.sm + 2,
  },
  gridCardText: { flex: 1, marginRight: spacing.xs },
  gridCardName: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.charcoal,
    fontFamily: 'Inter_500Medium',
    marginBottom: 2,
  },
  gridCardPrice: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.gold,
    fontFamily: 'Inter_700Bold',
  },
  plusBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.gold,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },

  newsScroll: { marginLeft: -spacing.lg, paddingLeft: spacing.lg },
  newsCard: {
    width: 190,
    marginRight: spacing.sm,
    backgroundColor: colors.white,
    borderRadius: borderRadius.md,
    overflow: 'hidden',
    marginBottom: 2,
    ...shadows.card,
  },
  newsBody: { padding: spacing.sm + 2 },
  newsTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.charcoal,
    fontFamily: 'Inter_500Medium',
    marginBottom: 3,
  },
  newsDesc: {
    fontSize: 11,
    color: colors.mutedText,
    fontFamily: 'Inter_400Regular',
  },

  hoursCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.md,
    overflow: 'hidden',
    ...shadows.card,
  },
  hoursRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    paddingVertical: 14,
  },
  hoursRowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: colors.warmGrey,
  },
  hoursLeft: { flexDirection: 'row', alignItems: 'center' },
  openDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#4CAF50',
    marginRight: spacing.sm,
  },
  hoursDay: {
    fontSize: 14,
    color: colors.charcoal,
    fontFamily: 'Inter_500Medium',
  },
  hoursTime: {
    fontSize: 14,
    color: colors.mutedText,
    fontFamily: 'Inter_400Regular',
  },
  closed: { fontStyle: 'italic' },

  instaRow: { flexDirection: 'row', alignItems: 'center' },
  instaHandle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.charcoal,
    fontFamily: 'Inter_500Medium',
  },
});
