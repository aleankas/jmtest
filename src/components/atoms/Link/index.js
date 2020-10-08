import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Shimmer from 'react-native-shimmer';

const Link = ({onPress, shimmer, text}) => {
  if (shimmer) {
    <View style={styles.shimmerWrapper}>
      <Shimmer
        style={styles.shimmerText}
        autoRun={true}
        visible={false}></Shimmer>
    </View>;
  }

  return (
    <TouchableOpacity style={styles.linkAddData} onPress={onPress}>
      <Text style={styles.txtLink}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({
  linkAddData: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtLink: {
    color: 'blue',
  },
  shimmerWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  shimmerText: {
    backgroundColor: '#ecf0f1',
    width: '50%',
    height: 15,
    marginBottom: 15,
  },
});
