import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing, borderRadius, shadows } from '../theme';
import { ServiceCard, BookButton } from '../components';
import { services, ServiceCategory } from '../data/services';

const categories: ServiceCategory[] = ['Haarschnitt', 'Bart', 'Kombi', 'Add-ons'];

export const ServicesScreen = () => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('Haarschnitt');
  const filtered = services.filter(s => s.category === activeCategory);

  return (
    <SafeAreaView style={styles.screen} edges={['bottom']}>
      {/* Category pills */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.tabBar}
        contentContainerStyle={styles.tabBarContent}
      >
        {categories.map(cat => (
          <TouchableOpacity
            key={cat}
            style={[styles.tab, activeCategory === cat && styles.tabActive]}
            onPress={() => setActiveCategory(cat)}
            activeOpacity={0.8}
          >
            <Text style={[styles.tabText, activeCategory === cat && styles.tabTextActive]}>{cat}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Services list */}
      <ScrollView
        style={styles.list}
        contentContainerStyle={[styles.listContent, { paddingBottom: 120 }]}
        showsVerticalScrollIndicator={false}
      >
        {filtered.map(service => (
          <ServiceCard
            key={service.id}
            name={service.name}
            description={service.description}
            price={service.price}
          />
        ))}
      </ScrollView>

      {/* Sticky book button */}
      <View style={styles.stickyBar}>
        <BookButton />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.cream },

  tabBar: {
    flexGrow: 0,
    backgroundColor: colors.cream,
  },
  tabBarContent: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    gap: spacing.sm,
  },
  tab: {
    paddingHorizontal: spacing.md,
    paddingVertical: 9,
    borderRadius: borderRadius.full,
    backgroundColor: colors.white,
    borderWidth: 1.5,
    borderColor: colors.warmGrey,
    ...shadows.card,
  },
  tabActive: {
    backgroundColor: colors.charcoal,
    borderColor: colors.charcoal,
  },
  tabText: {
    fontSize: 13,
    color: colors.mutedText,
    fontFamily: 'Inter_500Medium',
  },
  tabTextActive: {
    color: colors.cream,
    fontFamily: 'Inter_700Bold',
  },

  list: { flex: 1 },
  listContent: { padding: spacing.lg },

  stickyBar: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    backgroundColor: colors.cream,
    borderTopWidth: 1,
    borderTopColor: colors.warmGrey,
  },
});
