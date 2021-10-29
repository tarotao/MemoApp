import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Alert, FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  shape,
  string,
  instanceOf,
  arrayOf,
} from 'prop-types';
import firebase from 'firebase';

import Icon from './icon';
import { dateToString } from '../utils/index';

export default function MemoList(props) {
  const { memos } = props;
  const navigation = useNavigation();

  function deleteMemo(id) {
    const { currentUser } = firebase.auth();
    if (currentUser) {
      const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
      Alert.alert('メモを削除します', 'よろしいですか？', [
        {
          text: 'キャンセル',
          onPress: () => {},
        },
        {
          text: '削除する',
          onPress: () => {
            ref.delete().catch(() => {
              Alert.alert('削除に失敗しました');
            });
          },
          style: 'destructive',
        },
      ]);
    }
  }

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        style={styles.memolistitem}
        // { id: item.id }でmemodetailscreenにメモのIDを渡している
        onPress={() => { navigation.navigate('Detail', { id: item.id }); }}
      >
        <View>
          <Text style={styles.memolisttitle} numberOfLines={1}>{item.bodyText}</Text>
          <Text style={styles.memolistdate}>{dateToString(item.updatedAt)}</Text>
        </View>
        <TouchableOpacity
          style={styles.memoDelite}
          onPress={() => { deleteMemo(item.id); }}
        >
          <Icon name="delete" size={24} color="#808080" />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={memos}
        /* eslint-disable-next-line */
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

MemoList.propTypes = {
  memos: arrayOf(shape({
    id: string,
    bodyText: string,
    updatedAt: instanceOf(Date),
  })).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
