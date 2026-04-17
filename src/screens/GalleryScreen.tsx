import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Dimensions } from 'react-native';
import { colors, spacing } from '../theme';
import { ImagePlaceholder } from '../components';

const TABS = ['Alle', 'Haarschnitt', 'Bart', 'Styling'];
const ITEM_COUNT = 12;
const SCREEN_WIDTH = Dimensions.get('window').width;
const ITEM_SIZE = (SCREEN_WIDTH - spacing.lg * 2 - spacing.sm) / 2;

const placeholders = Array.from({ length: ITEM_COUNT }, (_, i) => ({ id: String(i) }));

export const GalleryScreen = () => {
  const [activeTab, setActiveTab] = useState('Alle');

  return (
    <View style={styles.screen}>
      {/* Tabs */}
      <View style={styles.tabBar}>
        {TABS.map(tab => (
          <TouchableOpacity key={tab} style={styles.tab} onPress={() => setActiveTab(tab)}>
            <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>{tab}</Text>
            {activeTab === tab && <View style={styles.tabUnderline} />}
          </TouchableOpacity>
        ))}
      </View>

      {/* Grid */}
      <FlatList
        data={placeholders}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.grid}
        columnWrapperStyle={styles.row}
        renderItem={() => (
          <ImagePlaceholder width={ITEM_SIZE} height={ITEM_SIZE} style={{ marginBottom: spacing.sm }} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.cream },
  tabBar: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.warmGrey,
    paddingHorizontal: spacing.md,
  },
  tab: { flex: 1, alignItems: 'center', paddingVertical: spacing.md },
  tabText: { fontSize: 13, color: colors.mutedText, fontWeight: '500' },
  tabTextActive: { color: colors.charcoal, fontWeight: '700' },
  tabUnderline: { height: 2, backgroundColor: colors.gold, width: '100%', marginTop: 4 },
  grid: { padding: spacing.lg },
  row: { justifyContent: 'space-between' },
});
