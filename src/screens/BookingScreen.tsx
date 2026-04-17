import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { colors, spacing } from '../theme';
import { BookButton } from '../components';

export const BookingScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.content}>
        <Text style={styles.brand}>EDOS BARBERS</Text>
        <View style={styles.divider} />
        <Text style={styles.title}>Buchen Sie Ihren Termin</Text>
        <Text style={styles.subtitle}>
          Wählen Sie Ihren Wunschtermin bei einem unserer erfahrenen Barbiere.
        </Text>
        <BookButton style={styles.button} />
        <Text style={styles.note}>Online-Buchung kommt bald direkt in der App</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.cream },
  content: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: spacing.xl },
  brand: { fontSize: 22, fontWeight: '700', color: colors.charcoal, letterSpacing: 3, marginBottom: spacing.md },
  divider: { width: 40, height: 2, backgroundColor: colors.gold, marginBottom: spacing.lg },
  title: { fontSize: 26, fontWeight: '700', color: colors.charcoal, textAlign: 'center', marginBottom: spacing.md },
  subtitle: { fontSize: 15, color: colors.mutedText, textAlign: 'center', lineHeight: 22, marginBottom: spacing.xl },
  button: { width: '100%', marginBottom: spacing.lg },
  note: { fontSize: 12, color: colors.mutedText, textAlign: 'center', fontStyle: 'italic' },
});
