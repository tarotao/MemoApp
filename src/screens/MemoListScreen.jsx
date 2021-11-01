import React, { useEffect, useState } from 'react';
import {
  Alert,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import firebase from 'firebase';

import MemoList from '../components/MemoList';
import CircleButton from '../components/CircleButton';
import LogOutButton from '../components/LogOutButton';
import Button from '../components/Button';
import Loading from '../components/Loading';
import { translateErrors } from '../utils';

export default function MemoListScreen(props) {
  const { navigation } = props;
  const [memos, setMemos] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogOutButton />,
    });
  }, []);

  useEffect(() => {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    // .orderByで追加された順でメモを保存する
    const ref = db.collection(`users/${currentUser.uid}/memos`).orderBy('updatedAt', 'desc');
    // メモリストのデータをsnapshotに入れている
    let unsubcrive = () => {};
    if (currentUser) {
      setLoading(true);
      unsubcrive = ref.onSnapshot((snapshot) => {
        const userMemos = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          userMemos.push({
            id: doc.id,
            bodyText: data.bodyText,
            updatedAt: data.updatedAt.toDate(),
          });
        });
        setMemos(userMemos);
        setLoading(false);
      }, (error) => {
        const errorMsg = translateErrors(error.code);
        setLoading(false);
        Alert.alert(errorMsg.title, errorMsg.description);
      });
    }
    return unsubcrive;
  }, []);

  if (memos.length === 0) {
    return (
      // buttonコンポにemptyStyleを渡している
      <View style={emptystyles.container}>
        <Loading />
        <View style={emptystyles.inner}>
          <Text style={emptystyles.title}>最初のメモを作成してみよう</Text>
          <Button
            label="作成する"
            onPress={() => { navigation.navigate('Create'); }}
            style={emptystyles.button}
          />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container} isLoading={isLoading}>
      <MemoList memos={memos} />
      <CircleButton
        name="plus"
        onPress={() => { navigation.navigate('Create'); }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  logOutContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  label: {
    fontSize: 14,
    color: 'rgba(255, 255, 255 ,.7)',
  },
});
const emptystyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 24,
  },
  button: {
    alignSelf: 'center',
  },
});
