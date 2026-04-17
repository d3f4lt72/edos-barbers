import React from 'react';
import { View, Text, StyleSheet, ViewStyle, DimensionValue } from 'react-native';
import { colors } from '../theme';

interface Props {
  width: DimensionValue;
  height: DimensionValue;
  style?: ViewStyle;
  circular?: boolean;
}

export const ImagePlaceholder: React.FC<Props> = ({ width, height, style, circular }) => {
  const borderRadius = circular ? (typeof width === 'number' ? width / 2 : 999) : 8;
  return (
    <View style={[styles.container, { width, height, borderRadius }, style]}>
      <Text style={styles.icon}>✂</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.warmGrey,
    borderWidth: 1,
    borderColor: colors.gold,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  icon: {
    fontSize: 24,
    color: colors.gold,
  },
});
