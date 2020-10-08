import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import {ImgLogo, IconArrowUp} from '../../../assets';

const List = () => {
	return (
		<TouchableOpacity style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between',marginTop: 15, backgroundColor: '#ecf0f1', padding: 16}}>
			<Text>1</Text>
			<View style={{marginLeft: 15, marginRight: 25,flex: 1,}}>
				<Text numberOfLines={1}>Chuck Norris and Mr. T walked into a bar. The bar was instantly destroyed, as that level of awesome cannot be contained in one building.</Text>
			</View>
			<TouchableOpacity>
				<IconArrowUp />
			</TouchableOpacity>
		</TouchableOpacity>
	)
}

export default List

const styles = StyleSheet.create({})
