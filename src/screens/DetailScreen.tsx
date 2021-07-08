import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export const DetailScreen = () => {
    const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Detail Screen</Text>

			<Button
				onPress={() => navigation.navigate('Home')}
				title="Go to home"
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#b1b1b1',

		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		color: '#000',
	},
});
