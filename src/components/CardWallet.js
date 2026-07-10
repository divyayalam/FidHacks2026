import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Order matters: index 0 renders fully in front, each subsequent
// card peeks out from behind it — same visual logic as Apple Wallet.
const OFFSET = 34;

export default function CardWallet({ cards }) {
  const stackHeight = 108 + (cards.length - 1) * OFFSET;

  return (
    <View style={[styles.wrap, { height: stackHeight }]}>
      {cards.map((c, i) => {
        const textColor = c.textColor || '#fff';
        return (
          <View
            key={c.name}
            style={[
              styles.card,
              {
                backgroundColor: c.color,
                top: i * OFFSET,
                zIndex: cards.length - i,
              },
            ]}
          >
            <View style={styles.cardTop}>
              <Text style={[styles.cardBrand, { color: textColor }]}>{c.name}</Text>
              <Text style={[styles.cardNetwork, { color: textColor, opacity: 0.75 }]}>
                {c.network}
              </Text>
            </View>
            <Text style={[styles.cardNumber, { color: textColor, opacity: 0.9 }]}>
              •••• {c.last4}
            </Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    position: 'relative',
    marginBottom: 16,
  },
  card: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 108,
    borderRadius: 16,
    padding: 16,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 5,
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  cardBrand: {
    fontSize: 14,
    fontWeight: '700',
  },
  cardNetwork: {
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  cardNumber: {
    fontSize: 13,
    letterSpacing: 1,
  },
});