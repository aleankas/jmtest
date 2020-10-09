import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Shimmer from 'react-native-shimmer';
import {IconArrowUp} from '../../../assets';

const List = ({text, index, onPress, onPressIcon, shimmer}) => {
  if (shimmer) {
    return (
      <View>
        <Shimmer
          style={styles.shimmerWrapper}
          autoRun={true}
          visible={false}></Shimmer>
      </View>
    );
  }

  return (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
      <Text style={styles.txt}>{index}</Text>
      <View style={styles.viewTxt}>
        <Text numberOfLines={1} style={styles.txt}>
          {text}
        </Text>
      </View>
      {index === 1 ? (
        <Text style={styles.txtTop}>We're on Top</Text>
      ) : (
        <TouchableOpacity onPress={onPressIcon}>
          <IconArrowUp />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({
  shimmerWrapper: {
    backgroundColor: '#ecf0f1',
    width: '100%',
    height: 45,
    marginBottom: 15,
  },
  txtTop: {
    fontWeight: 'bold',
    color: '#16a085',
    fontSize: 16,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 10,
    backgroundColor: '#ecf0f1',
    padding: 16,
  },
  viewTxt: {marginLeft: 15, marginRight: 25, flex: 1},
  txt: {
    fontSize: 16,
  },
});
