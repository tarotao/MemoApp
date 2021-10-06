import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from './icon';

export default function MemoList() {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={styles.memolistitem}
        onPress={() => { navigation.navigate('Detail'); }}
      >
        <View>
          <Text style={styles.memolisttitle}>買い物リスト</Text>
          <Text style={styles.memolistdate}>２０２０年１２月２４日 １０：００</Text>
        </View>
        <TouchableOpacity
          style={styles.memoDelite}
          onPress={() => { Alert.alert('Sure'); }}
        >
          <Icon name="delete" size={24} color="#808080" />
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.memolistitem}
        onPress={() => { navigation.navigate('Detail'); }}
      >
        <View>
          <Text style={styles.memolisttitle}>買い物リスト</Text>
          <Text style={styles.memolistdate}>２０２０年１２月２４日 １０：００</Text>
        </View>
        <TouchableOpacity
          style={styles.memoDelite}
          onPress={() => { Alert.alert('Sure'); }}
        >
          <Icon name="delete" size={24} color="#808080" />
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.memolistitem}
        onPress={() => { navigation.navigate('Detail'); }}
      >
        <View>
          <Text style={styles.memolisttitle}>買い物リスト</Text>
          <Text style={styles.memolistdate}>２０２０年１２月２４日 １０：００</Text>
        </View>
        <TouchableOpacity
          style={styles.memoDelite}
          onPress={() => { Alert.alert('Sure'); }}
        >
          <Icon name="delete" size={24} color="#808080" />
        </TouchableOpacity>
      </TouchableOpacity>

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
  memoDelite: {
    padding: 8,
  },
});
