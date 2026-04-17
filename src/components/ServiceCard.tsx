import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors, spacing, borderRadius, shadows } from '../theme';

interface Props {
  name: string;
  description: string;
  price: string;
}

export const ServiceCard: React.FC<Props> = ({ name, description, price }) => {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.88}>
      <View style={styles.iconBox}>
        <Feather name="scissors" size={15} color={colors.gold} />
      </View>
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <Text style={styles.price}>{price}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginBottom: spacing.sm,
    ...shadows.card,
  },
  iconBox: {
    width: 36,
    height: 36,
    borderRadius: borderRadius.sm,
    backgroundColor: colors.warmGrey,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
    flexShrink: 0,
  },
  info: {
    flex: 1,
    marginRight: spacing.sm,
  },
  name: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.charcoal,
    fontFamily: 'Inter_500Medium',
    marginBottom: 3,
  },
  description: {
    fontSize: 12,
    color: colors.mutedText,
    fontFamily: 'Inter_400Regular',
  },
  price: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.gold,
    fontFamily: 'Inter_700Bold',
    flexShrink: 0,
  },
});
