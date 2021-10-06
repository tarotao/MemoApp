import React from 'react';
import {
  View, ScrollView, Text, StyleSheet,
} from 'react-native';

import CircleButton from '../components/CircleButton';

export default function MemoDetailScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.containar}>

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

      <CircleButton
        style={{ top: 60, bottom: 'auto' }}
        name="pencil"
        onPress={() => { navigation.navigate('Edit'); }}
      />
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
