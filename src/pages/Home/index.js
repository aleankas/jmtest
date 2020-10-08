import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  Alert,
} from 'react-native';
import {ImgLogo, IconArrowUp} from '../../assets';
import {Header, Gap, List} from '../../components';
import {getListData} from '../../config/Fetching/jokes';
import {useSelector, useDispatch} from 'react-redux';

const Home = () => {
  const stateGlobal = useSelector((state) => state);
  const dispatch = useDispatch();
  const [dataList, setDataList] = useState(stateGlobal.data);
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    fetchingData();
  }, []);

  const fetchingData = async () => {
    const res = await getListData();
    console.log('res: ', res.data.value);
    if (res) {
      setDataList(res.data.value);
      dispatch({type: 'SET_DATA', value: res.data.value});
      console.log('count: ', dataList.length);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      fetchingData();
    }, 2000);
  };

  const alert = (data) => {
    Alert.alert(
      '',
      `${data}`,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  };

  const pressIcon = () => {
    Alert.alert(
      'Icon Pressed',
      '',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
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
        {dataList.data !== '' ? (
          dataList.data.map((data, key) => {
            return (
              <List
                index={key + 1}
                key={data.id}
                text={data.joke}
                onPress={() => alert(data.joke)}
                onPressIcon={() => pressIcon()}
              />
            );
          })
        ) : (
          <View>
            <List shimmer={true} />
          </View>
        )}

        <View
          style={{
            marginTop: 20,
            marginBottom: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>+ Add more data</Text>
        </View>
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
