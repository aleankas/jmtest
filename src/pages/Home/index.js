import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import {ImgLogo, IconArrowUp} from '../../assets';
import {
  Header,
  Gap,
	List
} from '../../components';
const Home = () => {
	return (
		<View style={styles.pages}>
			<Header/>
			<View style={styles.content}>
				<Gap height={10} />
				<List/>
				<List/>
				<List/>
			</View>
		</View>
	)
}

export default Home


const styles = StyleSheet.create({
  pages: {
    backgroundColor: 'white',
    flex: 1,
	},
	content:{
    flex: 1,
		paddingHorizontal: 20,
    backgroundColor: 'white',
		
	}
});
