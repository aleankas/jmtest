import React, {useEffect, useState} from 'react';
import {RefreshControl, ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Gap, Header, Link, List} from '../../components';
import {getListData} from '../../config/Fetching/jokes';
import {alert, movingObj} from '../../utils';

const Home = () => {
  const stateGlobal = useSelector((state) => state);
  const dispatch = useDispatch();
  const [dataFromRedux, setDataFromRedux] = useState(stateGlobal.data);
  const [dataList, setDataList] = useState('');
  const [num, setNum] = useState(0);
  const [countPress, setCountPress] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    fetchingData();
  }, []);

  const fetchingData = async () => {
    dispatch({type: 'SET_SHIMMER', value: true});
    const res = await getListData();
    dispatch({type: 'SET_SHIMMER', value: false});
    if (res) {
      const dataFromRes = res.data.value;
      dispatch({type: 'SET_DATA', value: dataFromRes});
      const dataSnap = dataFromRes.slice(0, res.data.value.length - 2);
      setDataList(dataSnap);
      setNum(res.data.value.length - 2);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    fetchingData();
    setTimeout(() => {
      setCountPress(0);
      setRefreshing(false);
    }, 1000);
  };

  const pressIcon = (data, key) => {
    const objToArr = Object.values(data);
    const move = movingObj(objToArr, key, key - 1);
    setDataList(move);
  };

  const addMoreData = () => {
    setRefreshing(true);
    setTimeout(() => {
      const varNum = num + 1;
      const stateDataRedux = dataFromRedux;
      const dataSnap = stateDataRedux.slice(-varNum)[0];
      const newData = [];
      newData.push(dataSnap);
      setDataList(dataList.concat(dataSnap));
      setNum(varNum);
      setCountPress(countPress + 1);
      setRefreshing(false);
    }, 500);
  };

  return (
    <View style={styles.pages}>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.content}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {dataList !== '' ? (
          dataList.map((data, key) => {
            return (
              <List
                index={key + 1}
                key={key}
                text={`${data.joke}`}
                onPress={() => alert(data.joke)}
                onPressIcon={() => pressIcon(dataList, key)}
              />
            );
          })
        ) : (
          <View>
            <List shimmer={stateGlobal.shimmer} />
          </View>
        )}
        {countPress < 2 && (
          <Link
            shimmer={stateGlobal.shimmer}
            text="+ Add more data"
            onPress={addMoreData}
          />
        )}
        <Gap height={35} />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  pages: {
    backgroundColor: 'white',
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
});
