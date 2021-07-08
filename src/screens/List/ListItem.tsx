import React, { useCallback, useRef } from 'react';
import { Animated, Image, StyleSheet, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Item, SPACING } from '../List/components/Item';

const STATUS_BAR_HEIGHT = getStatusBarHeight();
const keyExtractor = (item: any) => `${item}`;

export const ListItem = () => {
	const scrollY = useRef(new Animated.Value(0)).current;

	const renderItem = useCallback(({ item, index }) => {
		return <Item scrollY={scrollY} index={index} />;
	}, []);

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
				contentContainerStyle={styles.contentContainer}
				data={Array.from(new Array(50).keys())}
				onScroll={Animated.event(
					[{ nativeEvent: { contentOffset: { y: scrollY } } }],
					{ useNativeDriver: true },
				)}
				keyExtractor={keyExtractor}
				renderItem={renderItem}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f5f5f5',
	},
	contentContainer: {
		paddingHorizontal: SPACING,
		paddingTop: SPACING,
	},

	itemContainer: {
		marginBottom: 15,
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#fff',

		paddingVertical: 15,
		paddingHorizontal: 10,
		borderRadius: 8,
		width: '100%',

		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5,
	},

	left: {
		borderRadius: 35,
		width: 70,
		height: 70,
		backgroundColor: '#3f3f3f2b',
	},

	right: {
		flex: 1,
		paddingLeft: 5,
	},
	title: {
		color: '#000',
		fontSize: 18,
		fontWeight: 'bold',
		paddingVertical: 5,
	},
	subTitle: {
		color: '#000',
		fontSize: 14,
	},
});
