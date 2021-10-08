import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
} from 'react-native';
import firebase from 'firebase';
// ここでuseNavigationを読み込む
import { useNavigation } from '@react-navigation/native';

export default function LogOutButton() {
  // screenコンポーネントの中でしかnavigatio.resetが
  // 使えないのでuseNavigationを使っている
  // また、下のようなuse~の宣言はは必ずexport defaultの直下に書く
  const navigation = useNavigation();
  function handlePress() {
    firebase.auth().signOut()
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'LogIn' }],
        });
      })
      .catch(() => {
        Alert.alert('ログアウトに失敗しました');
      });
  }
  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Text style={styles.label}>ログアウト</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  label: {
    fontSize: 14,
    color: 'rgba(255, 255, 255 ,.7)',
  },
});
