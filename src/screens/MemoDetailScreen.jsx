import React from 'react';
import {
  View, ScrollView, Text, StyleSheet,
} from 'react-native';

import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';

export default function MemoDetailScreen() {
  return (
    <View style={styles.containar}>
      <AppBar />

      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoDate}>２０２０年１２月２４日 １０：００</Text>
      </View>

      <ScrollView style={styles.memoBody}>
        <Text style={styles.MemoText}>
          買い物リスト
          ああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
        </Text>
      </ScrollView>

      <CircleButton style={{ top: 160, bottom: 'auto' }} name="edit-2" />
    </View>
  );
}

const styles = StyleSheet.create({
  containar: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  memoHeader: {
    backgroundColor: '#467FD3',
    height: 96,
    justifyContent: 'center',
    paddingHorizontal: 19,
    paddingVertical: 24,
  },
  memoTitle: {
    color: '#ffffff',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  memoDate: {
    color: '#ffffff',
    fontSize: 12,
    lineHeight: 16,
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  memoText: {
    fontSize: 16,
    lineHeight: 24,
  },
});
