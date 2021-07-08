import React, { memo } from 'react';
import { useState } from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

const { width } = Dimensions.get('window');

const OVERFLOW_HEIGHT = 70;
const SPACING = 10;
const ITEM_WIDTH = width * 0.8;
const ITEM_HEIGHT = ITEM_WIDTH * 1.7;

interface OverFlowProps {
	data?: { title: string; location: string; date: string; poster: string }[];
}

let DATA: { title: string; location: string; date: string; poster: string }[] =
	[];
for (let index = 0; index < 20; index++) {
	let item = {
		title: `Over flow ${index + 1}`,
		location: 'hanoi',
		date: 'Jul 17th, 2021',
		poster: 'https://img.freepik.com/free-vector/hand-painted-nature-background_23-2148940793.jpg?size=626&ext=jpg',
	};
	DATA.push(item);
}

const OverflowItems = (props: OverFlowProps) => {
	const { data } = props;

	return (
		<View style={styles.overflowContainer}>
			{data?.map(item => (
				<Text>Over flow</Text>
			))}
		</View>
	);
};

export const StackCarousel = memo(() => {
	return (
		<View style={styles.container}>
			<OverflowItems data={DATA} />
		</View>
	);
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f5f5f5',
	},
	title: {
		fontSize: 28,
		fontWeight: 'bold',
	},
	location: {
		fontSize: 16,
	},
	date: {
		fontSize: 12,
	},
	itemContainer: {
		height: OVERFLOW_HEIGHT,
		padding: SPACING,
	},
	itemContainerRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	overflowContainer: {
		height: OVERFLOW_HEIGHT,
		overflow: 'hidden',
	},
});
