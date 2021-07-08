import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useRef} from 'react';
import {Animated, Dimensions, Image, StyleSheet, View} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {Item} from './components/Item';

const {width, height} = Dimensions.get('screen');
const ITEM_SIZE = 100; // image height + paddingVertical

export const HomeScreen = () => {
	const navigation = useNavigation();
	const scrollY = useRef(new Animated.Value(0)).current;

	return (
		<View style={styles.container}>
			<Image
				source={{
					uri: 'https://images.all-free-download.com/images/graphicthumb/beautiful_sunflower_vector_155844.jpg',
				}}
				resizeMode="cover"
				style={StyleSheet.absoluteFillObject}
				blurRadius={5}
			/>

			<Animated.FlatList
				onScroll={Animated.event(
					[{nativeEvent: {contentOffset: {y: scrollY}}}],
					{useNativeDriver: true},
				)}
				data={Array.from(new Array(100).keys())}
				keyExtractor={item => `${item}`}
				renderItem={({item, index}) => {
					const inputRange = [
						-1,
						0,
						ITEM_SIZE * index,
						ITEM_SIZE * (index + 0.5),
					];
					const opacityInputRange = [
						-1,
						0,
						ITEM_SIZE * index,
						ITEM_SIZE * (index + 0.5),
					];
					const scale = scrollY.interpolate({
						inputRange,
						outputRange: [1, 1, 1, 0],
					});
					const opacity = scrollY.interpolate({
						inputRange: opacityInputRange,
						outputRange: [1, 1, 1, 0],
					});

					return <Item scale={scale} opacity={opacity} scrollY={scrollY} />;
				}}
				style={{paddingHorizontal: 16, marginTop: getStatusBarHeight()}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f5f5f5',
	},
});
