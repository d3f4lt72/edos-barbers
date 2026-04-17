import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing, borderRadius, shadows } from '../theme';
import { ImagePlaceholder } from '../components';

const TABS = ['Alle', 'Haarschnitt', 'Bart', 'Styling'];
const ITEM_COUNT = 12;
const SCREEN_WIDTH = Dimensions.get('window').width;
const GAP = spacing.sm;
const ITEM_SIZE = (SCREEN_WIDTH - spacing.lg * 2 - GAP) / 2;

const placeholders = Array.from({ length: ITEM_COUNT }, (_, i) => ({ id: String(i) }));

export const GalleryScreen = () => {
  const [activeTab, setActiveTab] = useState('Alle');

  return (
    <SafeAreaView style={styles.screen} edges={['bottom']}>
      {/* Pill tabs */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.tabBar}
        contentContainerStyle={styles.tabBarContent}
      >
        {TABS.map(tab => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.tabActive]}
            onPress={() => setActiveTab(tab)}
            activeOpacity={0.8}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Grid */}
      <FlatList
        data={placeholders}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={[styles.grid, { paddingBottom: 110 }]}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
        renderItem={({ index }) => (
          <View style={[styles.gridItem, index % 2 === 0 ? { marginRight: GAP } : {}]}>
            <ImagePlaceholder
              width={ITEM_SIZE}
              height={ITEM_SIZE}
              style={{ borderRadius: borderRadius.md }}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.cream },

  tabBar: { flexGrow: 0 },
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

  grid: { padding: spacing.lg },
  row: { marginBottom: GAP },
  gridItem: {},
});
