import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {ImgLogo, IconArrowUp} from '../../../assets';
import Shimmer from 'react-native-shimmer';

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
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 5,
        marginBottom: 10,
        backgroundColor: '#ecf0f1',
        padding: 16,
      }}
      onPress={onPress}>
      
      <Text>{index}</Text>
      <View style={{marginLeft: 15, marginRight: 25, flex: 1}}>
        <Text numberOfLines={1}>{text}</Text>
      </View>
      {index === 1 ? <Text style={styles.txtTop}>We're on Top</Text> : <TouchableOpacity onPress={onPressIcon}>
        <IconArrowUp />
      </TouchableOpacity>}
      
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
  txtTop:{
    fontWeight: 'bold',
    color: '#16a085'
  }
});
