import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
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
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Willkommen!</Text>
            <Text style={styles.brand}>EDOS BARBERS</Text>
          </View>
          <TouchableOpacity style={styles.bellBtn}>
            <Feather name="bell" size={20} color={colors.charcoal} />
          </TouchableOpacity>
        </View>

        {/* Search bar */}
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
          <TouchableOpacity style={styles.filterBtn}>
            <Feather name="sliders" size={18} color={colors.charcoal} />
          </TouchableOpacity>
        </View>

        {/* Promo Banner */}
        <View style={styles.promoBanner}>
          <View style={{ flex: 1 }}>
            <Text style={styles.promoTitle}>10% auf Ihren{'\n'}nächsten Schnitt!</Text>
            <Text style={styles.promoSub}>Jetzt Mitglied werden & sparen</Text>
            <TouchableOpacity style={styles.promoBtn} onPress={() => navigation.navigate('Membership')}>
              <Text style={styles.promoBtnText}>Entdecken</Text>
            </TouchableOpacity>
          </View>
          <ImagePlaceholder width={90} height={90} style={{ borderRadius: borderRadius.md, marginLeft: spacing.md }} />
        </View>

        {/* Featured services */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Beliebte Leistungen</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Services')}>
              <Text style={styles.seeAll}>Alle anzeigen</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.gridRow}>
            {featuredServices.map((service, index) => (
              <View key={service.id} style={[styles.gridCard, index % 2 === 0 && { marginRight: spacing.sm }]}>
                <ImagePlaceholder width="100%" height={110} style={{ borderRadius: borderRadius.md }} />
                <View style={styles.gridCardBody}>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.gridCardName}>{service.name}</Text>
                    <Text style={styles.gridCardPrice}>{service.price}</Text>
                  </View>
                  <TouchableOpacity style={styles.plusBtn} activeOpacity={0.8}>
                    <Feather name="plus" size={16} color={colors.charcoal} />
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
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Öffnungszeiten</Text>
          </View>
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
          <View style={styles.sectionHeader}>
            <Text style={styles.instaHandle}>@edosbarbers</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>Profil ansehen</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {Array.from({ length: 6 }).map((_, i) => (
              <ImagePlaceholder key={i} width={80} height={80} style={{ marginRight: spacing.sm, borderRadius: borderRadius.md }} />
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
  greeting: { fontSize: 13, color: colors.mutedText, fontWeight: '500' },
  brand: { fontSize: 22, fontWeight: '700', color: colors.charcoal, letterSpacing: 2, fontFamily: 'PlayfairDisplay_700Bold' },
  bellBtn: {
    width: 40, height: 40, borderRadius: 20,
    backgroundColor: colors.white, alignItems: 'center', justifyContent: 'center',
    ...shadows.card,
  },
  searchRow: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: spacing.lg, marginBottom: spacing.lg, gap: spacing.sm },
  searchBar: {
    flex: 1, flexDirection: 'row', alignItems: 'center',
    backgroundColor: colors.warmGrey, borderRadius: borderRadius.full,
    paddingHorizontal: spacing.md, paddingVertical: spacing.sm + 2,
  },
  searchInput: { flex: 1, fontSize: 14, color: colors.charcoal },
  filterBtn: {
    width: 44, height: 44, borderRadius: 22,
    backgroundColor: colors.white, alignItems: 'center', justifyContent: 'center',
    ...shadows.card,
  },
  promoBanner: {
    marginHorizontal: spacing.lg, marginBottom: spacing.lg,
    backgroundColor: colors.charcoal, borderRadius: borderRadius.lg,
    padding: spacing.lg, flexDirection: 'row', alignItems: 'center',
  },
  promoTitle: { fontSize: 18, fontWeight: '700', color: '#FFFFFF', lineHeight: 24, marginBottom: spacing.xs, fontFamily: 'PlayfairDisplay_700Bold' },
  promoSub: { fontSize: 12, color: 'rgba(255,255,255,0.6)', marginBottom: spacing.md },
  promoBtn: { backgroundColor: colors.gold, paddingVertical: 8, paddingHorizontal: spacing.md, borderRadius: borderRadius.full, alignSelf: 'flex-start' },
  promoBtnText: { fontSize: 13, fontWeight: '700', color: colors.charcoal },
  section: { paddingHorizontal: spacing.lg, marginBottom: spacing.xl },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing.md },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: colors.charcoal, fontFamily: 'PlayfairDisplay_700Bold' },
  seeAll: { fontSize: 13, color: colors.gold, fontWeight: '600' },
  gridRow: { flexDirection: 'row', flexWrap: 'wrap' },
  gridCard: {
    flex: 1, backgroundColor: colors.white, borderRadius: borderRadius.lg,
    overflow: 'hidden', marginBottom: spacing.sm, ...shadows.card,
  },
  gridCardBody: { flexDirection: 'row', alignItems: 'center', padding: spacing.sm },
  gridCardName: { fontSize: 13, fontWeight: '600', color: colors.charcoal },
  gridCardPrice: { fontSize: 15, fontWeight: '700', color: colors.gold, marginTop: 2 },
  plusBtn: {
    width: 32, height: 32, borderRadius: 16,
    backgroundColor: colors.gold, alignItems: 'center', justifyContent: 'center',
  },
  newsScroll: { marginHorizontal: -spacing.lg, paddingHorizontal: spacing.lg },
  newsCard: { width: 160, marginRight: spacing.md, backgroundColor: colors.white, borderRadius: borderRadius.md, overflow: 'hidden', ...shadows.card, marginBottom: 4 },
  newsTitle: { fontSize: 13, fontWeight: '600', color: colors.charcoal, marginTop: spacing.sm, paddingHorizontal: spacing.sm },
  newsDesc: { fontSize: 11, color: colors.mutedText, marginTop: 2, paddingHorizontal: spacing.sm, paddingBottom: spacing.sm },
  hoursTable: { backgroundColor: colors.white, borderRadius: borderRadius.md, overflow: 'hidden', ...shadows.card },
  hoursRow: { flexDirection: 'row', justifyContent: 'space-between', padding: spacing.md },
  hoursRowBorder: { borderBottomWidth: 1, borderBottomColor: colors.warmGrey },
  hoursDay: { fontSize: 14, color: colors.charcoal, fontWeight: '500' },
  hoursTime: { fontSize: 14, color: colors.mutedText },
  closed: { fontStyle: 'italic' },
  instaHandle: { fontSize: 15, fontWeight: '700', color: colors.charcoal },
});
