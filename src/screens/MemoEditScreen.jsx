import React, { useState } from 'react';
import {
  View, StyleSheet, TextInput, Alert,
} from 'react-native';
import { string, shape } from 'prop-types';
import firebase from 'firebase';
import CircleButton from '../components/CircleButton';
import KeybordSafeView from '../components/KeyboardSafeView';
import translateErrors from '../utils/index';

export default function MemoEditlScreen(props) {
  const { navigation, route } = props;
  const { id, bodyText } = route.params;
  // 渡ってきたbodyTextをbody（この中には編集した値が入る）という変数の中に入れて編集できるようにしている
  const [body, setBody] = useState(bodyText);
  function handlePress() {
    const { currentUser } = firebase.auth();
    if (currentUser) {
      const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
      ref.set({
        bodyText: body,
        updatedAt: new Date(),
      })
        .then(() => {
          navigation.goBack();
        })
        .catch((error) => {
          const errorMsg = translateErrors(error.code);
          Alert.alert(errorMsg.title, errorMsg.description);
        });
    }
  }
  return (
    <KeybordSafeView style={styles.container}>
      <View style={styles.inputContainaer}>
        <TextInput
          value={body}
          multiline
          style={styles.input}
          onChangeText={(text) => { setBody(text); }}
        />
      </View>
      <CircleButton
        name="check"
        /* eslint-disable-next-line */
        onPress={handlePress}
      />
    </KeybordSafeView>
  );
}

MemoEditlScreen.propTypes = {
  route: shape({
    params: shape({ id: string }),
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainaer: {
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
    paddingTop: 32,
    paddingBottom: 32,
    paddingHorizontal: 27,
  },

});
