import React, { memo } from 'react';
import { Animated, Image, StyleSheet, Text, View } from 'react-native';
import { IMG_AVATAR } from '../../../assets';

interface ItemProps {
	scrollY: Animated.Value;
	index: number;
}

const IMG_HEIGHT = 70;
export const SPACING = 15;
const ITEM_SIZE = IMG_HEIGHT + SPACING * 3;
 // image height + paddingTop + paddingBottom + marginBottom

export const Item = memo(function Item(props: ItemProps) {
	const { index, scrollY } = props;
	const inputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 2)];
	const opacityInputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 0.5)];
	const scale = scrollY.interpolate({ inputRange, outputRange: [1, 1, 1, 0] });
	const opacity = scrollY.interpolate({ inputRange: opacityInputRange, outputRange: [1, 1, 1, 0.6] });

	return (
		<Animated.View
			style={[
				styles.container,
				{
					transform: [{ scale }],
					opacity,
				},
			]}
		>
			<View style={styles.left}>
				<Image
					source={IMG_AVATAR}
					resizeMode="cover"
					style={styles.img}
				/>
			</View>

			<View style={styles.right}>
				<Text style={styles.title}>Lorem ipsum dolor sit.</Text>
				<Text style={styles.subTitle}>
					Lorem ipsum dolor sit amet consectetur adipisicing.
				</Text>
			</View>
		</Animated.View>
	);
});

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#fff',

		marginBottom: SPACING,
		padding: SPACING,
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

	left: { width: IMG_HEIGHT, height: IMG_HEIGHT },
	img: {
		borderRadius: IMG_HEIGHT / 2,
		width: '100%',
		height: '100%',
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
