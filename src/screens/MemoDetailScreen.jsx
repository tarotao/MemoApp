import React, { useEffect, useState } from 'react';
import { shape, string } from 'prop-types';
import {
  View, ScrollView, Text, StyleSheet,
} from 'react-native';
import firebase from 'firebase';
import { dateToString } from '../utils/index';

import CircleButton from '../components/CircleButton';

export default function MemoDetailScreen(props) {
  const { navigation, route } = props;
  const { id } = route.params;
  const [memo, setMemo] = useState(null);

  useEffect(() => {
    const { currentUser } = firebase.auth();
    let unsubscribe = () => {};
    if (currentUser) {
      const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
      unsubscribe = ref.onSnapshot((doc) => {
        const data = doc.data();
        setMemo({
          id: doc.id,
          bodyText: data.bodyText,
          updatedAt: data.updatedAt.toDate(),
        });
      });
    }
    return unsubscribe;
  }, []);
  // {memo && memo.bodyText}だとmemoがnullやfalseではない場合のみmemo.bodyTextが実行される

  return (
    <View style={styles.containar}>

      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle} numberOfLines={1}>{memo && memo.bodyText}</Text>
        <Text style={styles.memoDate}>{memo && dateToString(memo.updatedAt)}</Text>
      </View>

      <ScrollView>
        <View style={styles.memoBodyInner}>
          <Text style={styles.MemoText}>
            {memo && memo.bodyText}
          </Text>
        </View>
      </ScrollView>

      <CircleButton
        style={{ top: 60, bottom: 'auto' }}
        name="pencil"
        onPress={() => { navigation.navigate('Edit', { id: memo.id, bodyText: memo.bodyText }); }}
      />
      {/* ↑{ id: memo.id, bodyText: memo.bodyText }と書いて、editscreenにidとbodytextの情報を渡している */}
    </View>
  );
}

MemoDetailScreen.propTypes = {
  route: shape({
    params: shape({ id: string }),
  }).isRequired,
};

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
  memoText: {
    fontSize: 16,
    lineHeight: 24,
  },
  memoBodyInner: {
    paddingTop: 32,
    paddingBottom: 80,
    paddingHorizontal: 27,
  },
});
