import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
        <View style={styles.appbarinner}>
          <Text style={styles.appbartitle}>Memo App</Text>
          <Text style={styles.appbarright}>ログアウト</Text>
        </View>
      </View>

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

      <View style={styles.circlebotton}>
        <Text style={styles.circlebottonlabel}>+</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  appbar: {
    width: '100%',
    height: 104,
    backgroundColor: '#467FD3',
    justifyContent: 'flex-end',
  },
  appbarinner: {
    alignItems: 'center',
  },
  appbartitle: {
    marginBottom: 8,
    fontSize: 22,
    lineHeight: 32,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  appbarright: {
    position: 'absolute',
    right: 19,
    bottom: 16,
    color: 'rgba(255, 255, 255, .8)',
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
  circlebotton: {
    backgroundColor: '#467FD3',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
  circlebottonlabel: {
    color: '#ffffff',
    fontSize: 40,
    lineHeight: 40,
  },
});
