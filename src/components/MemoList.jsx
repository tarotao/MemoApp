import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MemoList() {
  return (
    <View>
      <View style={styles.memolistitem}>
        <View>
          <Text style={styles.memolisttitle}>買い物リスト</Text>
          <Text style={styles.memolistdate}>２０２０年１２月２４日 １０：００</Text>
        </View>
        <View>
          <Text>X</Text>
        </View>
      </View>

      <View style={styles.memolistitem}>
        <View>
          <Text style={styles.memolisttitle}>買い物リスト</Text>
          <Text style={styles.memolistdate}>２０２０年１２月２４日 １０：００</Text>
        </View>
        <View>
          <Text>X</Text>
        </View>
      </View>

      <View style={styles.memolistitem}>
        <View>
          <Text style={styles.memolisttitle}>買い物リスト</Text>
          <Text style={styles.memolistdate}>２０２０年１２月２４日 １０：００</Text>
        </View>
        <View>
          <Text>X</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  memolistitem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)',
  },
  memolisttitle: {
    lineHeight: 32,
    fontSize: 16,
  },
  memolistdate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484',
  },
});
