import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { colors, spacing, borderRadius, shadows } from '../theme';
import { ImagePlaceholder } from '../components';

const hours = [
  { day: 'Montag – Freitag', short: 'Mo – Fr', time: '09:00 – 19:00' },
  { day: 'Samstag', short: 'Sa', time: '09:00 – 17:00' },
  { day: 'Sonntag', short: 'So', time: 'Geschlossen' },
];

const contactItems = [
  {
    icon: 'map-pin' as const,
    label: 'Adresse',
    value: 'Hauptstraße 3, 1110 Simmering, Wien',
    action: () => Linking.openURL('https://maps.google.com/?q=Hauptstraße+3,+1110+Wien'),
  },
  {
    icon: 'phone' as const,
    label: 'Telefon',
    value: '+43 (0) 000 000 000',
    action: () => Linking.openURL('tel:+43000000000'),
  },
  {
    icon: 'mail' as const,
    label: 'E-Mail',
    value: 'info@edosbarbers.at',
    action: () => Linking.openURL('mailto:info@edosbarbers.at'),
  },
];

export const ContactScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.cream }} edges={['bottom']}>
      <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>

        {/* Contact card */}
        <View style={styles.contactCard}>
          {contactItems.map((item, i) => (
            <React.Fragment key={item.label}>
              <TouchableOpacity style={styles.contactRow} onPress={item.action} activeOpacity={0.8}>
                <View style={styles.contactIcon}>
                  <Feather name={item.icon} size={16} color={colors.gold} />
                </View>
                <View style={styles.contactText}>
                  <Text style={styles.contactLabel}>{item.label}</Text>
                  <Text style={styles.contactValue}>{item.value}</Text>
                </View>
                <Feather name="chevron-right" size={16} color={colors.mutedText} />
              </TouchableOpacity>
              {i < contactItems.length - 1 && <View style={styles.divider} />}
            </React.Fragment>
          ))}
        </View>

        {/* Opening hours */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Öffnungszeiten</Text>
          <View style={styles.hoursCard}>
            {hours.map((h, i) => (
              <View
                key={i}
                style={[styles.hoursRow, i < hours.length - 1 && styles.hoursBorder]}
              >
                <Text style={styles.hoursDay}>{h.day}</Text>
                <Text style={[styles.hoursTime, h.time === 'Geschlossen' && styles.closedText]}>
                  {h.time}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Map */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Standort</Text>
          <TouchableOpacity
            style={styles.mapContainer}
            activeOpacity={0.9}
            onPress={() => Linking.openURL('https://maps.google.com/?q=Hauptstraße+3,+1110+Wien')}
          >
            <ImagePlaceholder width="100%" height={180} style={{ borderRadius: borderRadius.md }} />
            <View style={styles.mapOverlay}>
              <View style={styles.mapPinRow}>
                <Feather name="map-pin" size={14} color={colors.gold} style={{ marginRight: 5 }} />
                <Text style={styles.mapPinText}>In Maps öffnen</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* Social */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Folge uns</Text>
          <TouchableOpacity
            style={styles.socialBtn}
            activeOpacity={0.85}
            onPress={() => Linking.openURL('https://instagram.com/edosbarbers')}
          >
            <View style={styles.socialIconBox}>
              <Feather name="instagram" size={20} color={colors.gold} />
            </View>
            <View style={styles.socialText}>
              <Text style={styles.socialName}>Instagram</Text>
              <Text style={styles.socialHandle}>@edosbarbers</Text>
            </View>
            <Feather name="chevron-right" size={16} color={colors.mutedText} />
          </TouchableOpacity>
        </View>

        <View style={{ height: 110 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.cream },

  contactCard: {
    backgroundColor: colors.white,
    marginHorizontal: spacing.lg,
    marginTop: spacing.lg,
    marginBottom: spacing.xl,
    borderRadius: borderRadius.lg,
    ...shadows.card,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.md,
  },
  contactIcon: {
    width: 38,
    height: 38,
    borderRadius: borderRadius.sm,
    backgroundColor: colors.warmGrey,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
    flexShrink: 0,
  },
  contactText: { flex: 1 },
  contactLabel: {
    fontSize: 11,
    color: colors.mutedText,
    fontFamily: 'Inter_400Regular',
    textTransform: 'uppercase',
    letterSpacing: 0.6,
    marginBottom: 2,
  },
  contactValue: {
    fontSize: 14,
    color: colors.charcoal,
    fontFamily: 'Inter_500Medium',
  },
  divider: {
    height: 1,
    backgroundColor: colors.warmGrey,
    marginHorizontal: spacing.md,
  },

  section: {
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    fontSize: 18,
    color: colors.charcoal,
    fontFamily: 'PlayfairDisplay_700Bold',
    marginBottom: spacing.md,
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
  hoursBorder: {
    borderBottomWidth: 1,
    borderBottomColor: colors.warmGrey,
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
  closedText: {
    fontStyle: 'italic',
    color: colors.mutedText,
  },

  mapContainer: { position: 'relative' },
  mapOverlay: {
    position: 'absolute',
    bottom: spacing.sm,
    left: spacing.sm,
    backgroundColor: 'rgba(26,26,26,0.75)',
    borderRadius: borderRadius.sm,
    paddingHorizontal: spacing.sm,
    paddingVertical: 6,
  },
  mapPinRow: { flexDirection: 'row', alignItems: 'center' },
  mapPinText: {
    color: colors.white,
    fontSize: 12,
    fontFamily: 'Inter_500Medium',
  },

  socialBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    ...shadows.card,
  },
  socialIconBox: {
    width: 42,
    height: 42,
    borderRadius: borderRadius.sm,
    backgroundColor: colors.warmGrey,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  socialText: { flex: 1 },
  socialName: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.charcoal,
    fontFamily: 'Inter_500Medium',
    marginBottom: 2,
  },
  socialHandle: {
    fontSize: 12,
    color: colors.mutedText,
    fontFamily: 'Inter_400Regular',
  },
});
