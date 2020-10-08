import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import {ImgLogo} from '../../../assets';
const Header = () => {
	return (
		<View style={styles.header}>
			<Image source={ImgLogo} style={styles.imgLogo}/>
		</View>
	)
}

export default Header


const styles = StyleSheet.create({
  
	imgLogo:{
		height: 30, 
		width: 100
	},
	header:{
		justifyContent: 'center',
    alignItems: 'center',
		backgroundColor: 'white',
		// paddingHorizontal: 10,
		paddingVertical: 20,
		elevation: 1,
	}
});
