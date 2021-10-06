import React from 'react';
import {
  View, StyleSheet, TextInput,
} from 'react-native';

import CircleButton from '../components/CircleButton';
import KeybordSafeView from '../components/KeyboardSafeView';

export default function MemoEditlScreen(props) {
  const { navigation } = props;
  return (
    <KeybordSafeView style={styles.container} behavior="height">
      <View style={styles.inputContainaer}>
        <TextInput value="買い物リスト" multiline style={styles.input} />
      </View>
      <CircleButton
        name="check"
        onPress={() => { navigation.goBack(); }}
      />
    </KeybordSafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainaer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
  },

});
