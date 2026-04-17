import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { colors, spacing, borderRadius, shadows } from '../theme';
import { ImagePlaceholder } from '../components';

const hours = [
  { day: 'Mo – Fr', time: '09:00 – 19:00' },
  { day: 'Samstag', time: '09:00 – 17:00' },
  { day: 'Sonntag', time: 'Geschlossen' },
];

export const ContactScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.cream }} edges={['bottom']}>
    <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
      {/* Contact info card */}
      <View style={styles.card}>
        <TouchableOpacity style={styles.row} onPress={() => Linking.openURL('https://maps.google.com/?q=Hauptstraße+3,+1110+Wien')}>
          <Feather name="map-pin" size={18} color={colors.gold} />
          <View style={styles.rowText}>
            <Text style={styles.label}>Adresse</Text>
            <Text style={styles.value}>Hauptstraße 3, 1110 Simmering, Wien</Text>
          </View>
          <Feather name="chevron-right" size={16} color={colors.mutedText} />
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity style={styles.row} onPress={() => Linking.openURL('tel:+43000000000')}>
          <Feather name="phone" size={18} color={colors.gold} />
          <View style={styles.rowText}>
            <Text style={styles.label}>Telefon</Text>
            <Text style={styles.value}>+43 (0) 000 000 000</Text>
          </View>
          <Feather name="chevron-right" size={16} color={colors.mutedText} />
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity style={styles.row} onPress={() => Linking.openURL('mailto:info@edosbarbers.at')}>
          <Feather name="mail" size={18} color={colors.gold} />
          <View style={styles.rowText}>
            <Text style={styles.label}>E-Mail</Text>
            <Text style={styles.value}>info@edosbarbers.at</Text>
          </View>
          <Feather name="chevron-right" size={16} color={colors.mutedText} />
        </TouchableOpacity>
      </View>

      {/* Opening hours */}
      <View style={styles.section}>
        <Text style={styles.heading}>Öffnungszeiten</Text>
        <View style={styles.hoursCard}>
          {hours.map((h, i) => (
            <View key={i} style={[styles.hoursRow, i < hours.length - 1 && styles.hoursBorder]}>
              <Text style={styles.hoursDay}>{h.day}</Text>
              <Text style={[styles.hoursTime, h.time === 'Geschlossen' && styles.closed]}>{h.time}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Map placeholder */}
      <View style={styles.section}>
        <Text style={styles.heading}>Standort</Text>
        <View style={styles.mapContainer}>
          <ImagePlaceholder width="100%" height={180} style={{ borderRadius: borderRadius.md }} />
          <View style={styles.mapLabel}>
            <Text style={styles.mapLabelText}>Karte folgt bald</Text>
          </View>
        </View>
      </View>

      {/* Social */}
      <View style={styles.section}>
        <Text style={styles.heading}>Folge uns</Text>
        <View style={styles.socialRow}>
          <TouchableOpacity style={styles.socialBtn} onPress={() => Linking.openURL('https://instagram.com/edosbarbers')}>
            <Feather name="instagram" size={22} color={colors.charcoal} />
            <Text style={styles.socialLabel}>Instagram</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ height: 100 }} />
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.cream },
  card: {
    backgroundColor: colors.white,
    margin: spacing.lg,
    borderRadius: borderRadius.lg,
    ...shadows.card,
  },
  row: { flexDirection: 'row', alignItems: 'center', padding: spacing.md },
  rowText: { flex: 1, marginLeft: spacing.md },
  label: { fontSize: 11, color: colors.mutedText, textTransform: 'uppercase', letterSpacing: 0.5 },
  value: { fontSize: 14, color: colors.charcoal, fontWeight: '500', marginTop: 2 },
  divider: { height: 1, backgroundColor: colors.warmGrey, marginHorizontal: spacing.md },
  section: { paddingHorizontal: spacing.lg, marginBottom: spacing.xl },
  heading: { fontSize: 18, fontWeight: '700', color: colors.charcoal, marginBottom: spacing.md },
  hoursCard: { backgroundColor: colors.white, borderRadius: borderRadius.md, overflow: 'hidden', ...shadows.card },
  hoursRow: { flexDirection: 'row', justifyContent: 'space-between', padding: spacing.md },
  hoursBorder: { borderBottomWidth: 1, borderBottomColor: colors.warmGrey },
  hoursDay: { fontSize: 14, color: colors.charcoal, fontWeight: '500' },
  hoursTime: { fontSize: 14, color: colors.mutedText },
  closed: { fontStyle: 'italic' },
  mapContainer: { position: 'relative' },
  mapLabel: {
    position: 'absolute',
    bottom: spacing.sm,
    left: spacing.sm,
    backgroundColor: 'rgba(26,26,26,0.7)',
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: borderRadius.sm,
  },
  mapLabelText: { color: colors.white, fontSize: 12 },
  socialRow: { flexDirection: 'row' },
  socialBtn: { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.white, padding: spacing.md, borderRadius: borderRadius.md, ...shadows.card },
  socialLabel: { marginLeft: spacing.sm, fontSize: 14, fontWeight: '600', color: colors.charcoal },
});
