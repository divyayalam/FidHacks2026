import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { colors, spacing } from '../theme';

const POSTS = [
  {
    initials: 'JT', name: 'Jordan T.', tag: 'Sophomore · Finance',
    body: 'Switched my grocery spend to my 4%-back card and it covered my textbooks this semester without touching savings.',
    kind: 'win',
  },
  {
    initials: 'RP', name: 'Riya P.', tag: 'Freshman · Bio',
    body: "Learned the hard way that a store card's 20% discount isn't worth it once the deferred interest kicks in. Read the terms first.",
    kind: 'lesson',
  },
  {
    initials: 'SM', name: 'Sam M.', tag: 'Junior · Comm',
    body: 'Set autopay for the statement balance, not the minimum — it\u2019s the easiest way to stop interest before it starts.',
    kind: 'tip',
  },
];

const KIND_STYLES = {
  win: { bg: '#e2ede6', color: colors.brandDark, label: 'win' },
  lesson: { bg: colors.warnSoft, color: colors.warn, label: 'lesson' },
  tip: { bg: colors.goldSoft, color: '#7a521c', label: 'tip' },
};

const INITIAL_GROUPS = [
  { name: 'Scholarship Alerts', sub: '2.3k members · new posts daily', joined: true },
  { name: 'Side Hustle Swap', sub: '890 members', joined: false },
  { name: 'Internship Leads', sub: '1.6k members', joined: false },
];

export default function CommunityScreen() {
  const [groups, setGroups] = useState(INITIAL_GROUPS);

  function toggleJoin(index) {
    setGroups((prev) =>
      prev.map((g, i) => (i === index ? { ...g, joined: !g.joined } : g))
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Community</Text>
        <Text style={styles.subtitle}>Wins, mistakes, and leads from students like you</Text>

        <Text style={styles.sectionTitle}>FEED</Text>
        {POSTS.map((p, i) => {
          const k = KIND_STYLES[p.kind];
          return (
            <View key={i} style={styles.postCard}>
              <View style={styles.postHead}>
                <View style={styles.avatar}>
                  <Text style={styles.avatarText}>{p.initials}</Text>
                </View>
                <View>
                  <Text style={styles.postName}>{p.name}</Text>
                  <Text style={styles.postTag}>{p.tag}</Text>
                </View>
              </View>
              <Text style={styles.postBody}>{p.body}</Text>
              <View style={[styles.pill, { backgroundColor: k.bg }]}>
                <Text style={[styles.pillText, { color: k.color }]}>{k.label}</Text>
              </View>
            </View>
          );
        })}

        <Text style={styles.sectionTitle}>GROUPS</Text>
        {groups.map((g, i) => (
          <View key={g.name} style={styles.groupRow}>
            <View>
              <Text style={styles.groupName}>{g.name}</Text>
              <Text style={styles.groupSub}>{g.sub}</Text>
            </View>
            <TouchableOpacity
              style={[styles.joinBtn, g.joined && styles.joinBtnActive]}
              onPress={() => toggleJoin(i)}
            >
              <Text style={[styles.joinBtnText, g.joined && styles.joinBtnTextActive]}>
                {g.joined ? 'Joined' : 'Join'}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  container: { padding: spacing.lg, paddingBottom: 40 },
  title: { fontSize: 22, fontWeight: '600', color: colors.ink },
  subtitle: { fontSize: 12, color: colors.inkSoft, marginTop: 2 },
  sectionTitle: {
    fontSize: 11, fontWeight: '700', letterSpacing: 1, color: colors.inkSoft,
    marginTop: 22, marginBottom: 10,
  },
  postCard: {
    backgroundColor: colors.card, borderWidth: 1, borderColor: colors.line,
    borderRadius: 16, padding: 14, marginBottom: 10,
  },
  postHead: { flexDirection: 'row', alignItems: 'center', gap: 9, marginBottom: 8 },
  avatar: {
    width: 28, height: 28, borderRadius: 14, backgroundColor: colors.brand,
    alignItems: 'center', justifyContent: 'center',
  },
  avatarText: { color: '#fff', fontSize: 11, fontWeight: '700' },
  postName: { fontSize: 12.5, fontWeight: '700', color: colors.ink },
  postTag: { fontSize: 10, color: colors.inkSoft },
  postBody: { fontSize: 12.5, lineHeight: 18, color: colors.ink },
  pill: {
    alignSelf: 'flex-start', borderRadius: 20, paddingVertical: 3, paddingHorizontal: 8,
    marginTop: 8,
  },
  pillText: { fontSize: 9.5, fontWeight: '700' },

  groupRow: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    backgroundColor: colors.card, borderWidth: 1, borderColor: colors.line,
    borderRadius: 14, padding: 14, marginBottom: 8,
  },
  groupName: { fontSize: 13, fontWeight: '700', color: colors.ink },
  groupSub: { fontSize: 11, color: colors.inkSoft },
  joinBtn: {
    borderWidth: 1.5, borderColor: colors.brand, borderRadius: 20,
    paddingVertical: 6, paddingHorizontal: 12,
  },
  joinBtnActive: { backgroundColor: colors.brand },
  joinBtnText: { fontSize: 11, fontWeight: '700', color: colors.brand },
  joinBtnTextActive: { color: '#fff' },
});