import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'
import {ImgLogo} from '../../assets';
const Splash = ({navigation}) => {
	useEffect(() => {
		setTimeout(() => {
			navigation.replace('Home');
		}, 3000);
	}, [navigation])
	return (
		<View style={styles.pages}>
			<View style={styles.wrapper}>
				<Image source={ImgLogo} style={styles.imgLogo}/>
				<Text style={styles.title}>Technical Test</Text>
			</View>
		</View>
	)
}

export default Splash

const styles = StyleSheet.create({
  pages: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
		padding: 20,
  },
	wrapper:{
    backgroundColor: 'white',
		justifyContent: 'center',
    alignItems: 'center',
	},
	imgLogo:{
		height: 50, 
		width: 200
	},
	title:{
		fontSize: 18,
		color: 'black',
	}
});
