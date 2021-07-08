import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
	Dimensions,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const { width } = Dimensions.get('window');

export const HomeScreen = () => {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate('ListItem')}
			>
				<Text>Go to Scroll Vertical List Item</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate('ScrollHorizontal')}
			>
				<Text>Go to Scroll Horizontal</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate('StackCarousel')}
			>
				<Text>Go to Stack Carousel</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f5f5f5',
		paddingTop: getStatusBarHeight(),
	},
	button: {
		backgroundColor: '#27cafc',
		padding: 10,
		borderRadius: 5,
		alignSelf: 'flex-start',
		marginVertical: 10,
	},
});
