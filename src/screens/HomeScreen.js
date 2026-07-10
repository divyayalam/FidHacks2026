import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { colors, spacing } from '../theme';
import SurveySheet from '../components/SurveySheet';

const CATEGORIES = [
  { key: 'Food', amount: 564, color: colors.brand },
  { key: 'Subscriptions', amount: 310, color: colors.gold },
  { key: 'Shopping', amount: 205, color: '#7f8f88' },
  { key: 'Other', amount: 205, color: '#d8d4c2' },
];

const ACTIVITY = [
  { icon: '☕', name: 'Blue Bottle Coffee', sub: 'Used Emerald Rewards · Dining', amount: '-$6.25' },
  { icon: '🎬', name: 'Netflix', sub: 'Used Horizon Card · Subscriptions', amount: '-$15.49' },
  { icon: '🛍️', name: 'Target', sub: 'Used Emerald Rewards · Shopping', amount: '-$42.10' },
];

export default function HomeScreen() {
  const [surveyVisible, setSurveyVisible] = useState(false);
  const total = CATEGORIES.reduce((sum, c) => sum + c.amount, 0);

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.greeting}>Hey, Maya</Text>
        <Text style={styles.dateLine}>Thursday, July 9</Text>

        <Text style={styles.sectionTitle}>WHERE YOUR MONEY'S GOING</Text>
        <View style={styles.summaryCard}>
          <Text style={styles.totalLabel}>${total.toLocaleString()} this month</Text>
          <View style={styles.stackBar}>
            {CATEGORIES.map((c) => (
              <View
                key={c.key}
                style={{ flex: c.amount, backgroundColor: c.color, height: '100%' }}
              />
            ))}
          </View>
          <View style={styles.legend}>
            {CATEGORIES.map((c) => (
              <View key={c.key} style={styles.legendRow}>
                <View style={styles.legendLabel}>
                  <View style={[styles.dot, { backgroundColor: c.color }]} />
                  <Text style={styles.legendText}>{c.key}</Text>
                </View>
                <Text style={styles.legendAmount}>${c.amount}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.goalCard}>
          <Text style={styles.goalLabel}>CREDIT SCORE GOAL</Text>
          <View style={styles.goalRow}>
            <Text style={styles.goalScore}>690</Text>
            <Text style={styles.goalArrow}>→</Text>
            <Text style={styles.goalScore}>750</Text>
            <Text style={styles.goalDate}>by Dec 2026</Text>
          </View>
          <View style={styles.goalTrack}>
            <View style={styles.goalFill} />
          </View>
          <Text style={styles.goalCaption}>On track — utilization down 8% this month</Text>
        </View>

        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.btnPrimary} onPress={() => setSurveyVisible(true)}>
            <Text style={styles.btnPrimaryText}>⚡ Simulate tap-to-pay</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnOutline} onPress={() => setSurveyVisible(true)}>
            <Text style={styles.btnOutlineText}>Check best card</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>RECENT ACTIVITY</Text>
        {ACTIVITY.map((a, i) => (
          <View key={i} style={styles.activityRow}>
            <View style={styles.activityIcon}>
              <Text>{a.icon}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.activityName}>{a.name}</Text>
              <Text style={styles.activitySub}>{a.sub}</Text>
            </View>
            <Text style={styles.activityAmount}>{a.amount}</Text>
          </View>
        ))}
      </ScrollView>

      <SurveySheet visible={surveyVisible} onClose={() => setSurveyVisible(false)} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  container: { padding: spacing.lg, paddingBottom: 40 },
  greeting: { fontSize: 26, fontWeight: '600', color: colors.ink },
  dateLine: { fontSize: 12, color: colors.inkSoft, marginTop: 2 },
  sectionTitle: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1,
    color: colors.inkSoft,
    marginTop: 22,
    marginBottom: 10,
  },
  summaryCard: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 20,
    padding: 18,
  },
  totalLabel: { fontSize: 15, fontWeight: '700', color: colors.ink, marginBottom: 10 },
  stackBar: {
    flexDirection: 'row',
    height: 10,
    borderRadius: 6,
    overflow: 'hidden',
    marginBottom: 14,
  },
  legend: { gap: 7 },
  legendRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  legendLabel: { flexDirection: 'row', alignItems: 'center', gap: 7 },
  dot: { width: 8, height: 8, borderRadius: 4 },
  legendText: { fontSize: 12.5, color: colors.ink },
  legendAmount: { fontSize: 12, color: colors.inkSoft },

  goalCard: { backgroundColor: colors.brand, borderRadius: 20, padding: 18, marginTop: 14 },
  goalLabel: { fontSize: 11, color: '#cfe3da', fontWeight: '700', letterSpacing: 1 },
  goalRow: { flexDirection: 'row', alignItems: 'baseline', marginTop: 4 },
  goalScore: { fontSize: 22, fontWeight: '700', color: '#fff' },
  goalArrow: { color: '#cfe3da', marginHorizontal: 6 },
  goalDate: { fontSize: 11, color: '#cfe3da', marginLeft: 'auto' },
  goalTrack: { height: 6, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.2)', marginTop: 12, overflow: 'hidden' },
  goalFill: { height: '100%', width: '46%', backgroundColor: colors.gold, borderRadius: 4 },
  goalCaption: { fontSize: 11, color: '#cfe3da', marginTop: 8 },

  quickActions: { flexDirection: 'row', gap: 10, marginTop: 16 },
  btnPrimary: { flex: 1, backgroundColor: colors.gold, borderRadius: 14, paddingVertical: 13, alignItems: 'center' },
  btnPrimaryText: { color: '#251705', fontWeight: '700', fontSize: 13 },
  btnOutline: { flex: 1, borderWidth: 1.5, borderColor: colors.brand, borderRadius: 14, paddingVertical: 13, alignItems: 'center' },
  btnOutlineText: { color: colors.brand, fontWeight: '700', fontSize: 13 },

  activityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 11,
    borderBottomWidth: 1,
    borderBottomColor: colors.line,
  },
  activityIcon: {
    width: 34, height: 34, borderRadius: 10,
    backgroundColor: colors.goldSoft,
    alignItems: 'center', justifyContent: 'center',
  },
  activityName: { fontSize: 13, fontWeight: '600', color: colors.ink },
  activitySub: { fontSize: 11, color: colors.inkSoft },
  activityAmount: { fontSize: 13, color: colors.ink },
});