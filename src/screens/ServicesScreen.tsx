import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing, borderRadius } from '../theme';
import { ServiceCard, BookButton } from '../components';
import { services, ServiceCategory } from '../data/services';

const categories: ServiceCategory[] = ['Haarschnitt', 'Bart', 'Kombi', 'Add-ons'];

export const ServicesScreen = () => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('Haarschnitt');
  const filtered = services.filter(s => s.category === activeCategory);

  return (
    <SafeAreaView style={styles.screen} edges={['bottom']}>
      {/* Filter tabs */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.tabBar}
        contentContainerStyle={styles.tabBarContent}
      >
        {categories.map(cat => (
          <TouchableOpacity key={cat} style={styles.tab} onPress={() => setActiveCategory(cat)}>
            <Text style={[styles.tabText, activeCategory === cat && styles.tabTextActive]}>{cat}</Text>
            {activeCategory === cat && <View style={styles.tabUnderline} />}
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Services list */}
      <ScrollView style={styles.list} contentContainerStyle={styles.listContent}>
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
  tabBar: { borderBottomWidth: 1, borderBottomColor: colors.warmGrey, flexGrow: 0 },
  tabBarContent: { paddingHorizontal: spacing.md },
  tab: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    alignItems: 'center',
    marginRight: spacing.xs,
  },
  tabText: { fontSize: 14, color: colors.mutedText, fontWeight: '500' },
  tabTextActive: { color: colors.charcoal, fontWeight: '700' },
  tabUnderline: { height: 2, backgroundColor: colors.gold, width: '100%', marginTop: 4 },
  list: { flex: 1 },
  listContent: { padding: spacing.lg },
  stickyBar: {
    padding: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.warmGrey,
    backgroundColor: colors.cream,
  },
});
