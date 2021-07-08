import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import {
	Animated,
	Dimensions,
	Image,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const STATUS_BAR_HEIGHT = getStatusBarHeight();
const { width, height } = Dimensions.get('window');
const SPACING = 15;
const IMG_WIDTH = width - SPACING * 2;
const IMG_HEIGHT = height / 3;
const ITEM_SIZE = IMG_WIDTH + SPACING * 3;

const colors = [
	'#00b7ff',
	'#f79dff',
	'#d8f000',
	'#ffa42c',
	'#ff2c72',
	'#7d2cff',
	'#2cff72',
	'#7d2cff',
	'#2cffe3',
	'#ff2c6b',
];

export const ScrollHorizontal = () => {
	const scrollX = useRef(new Animated.Value(0)).current;
	const scrollRef = useRef(null);

	const scrollToStart = useCallback(() => {
		if (scrollRef.current) {
			scrollRef.current.scrollToItem({ animated: false, item: 0 });
		}
	}, []);
	const scrollContentSize = useRef({ width: 0, height: 0 });

	return (
		<View style={styles.container}>
			<Animated.FlatList
				// onScroll={e => {
				// 	const offsetXlastPage =
				// 		scrollContentSize.current.width - width;
				// 	const contentOffsetX = e.nativeEvent.contentOffset.x;
				// 	if (contentOffsetX - offsetXlastPage >= 0) {
				// 		scrollToStart();
				// 	}
				// }}
				onScroll={Animated.event(
					[{ nativeEvent: { contentOffset: { x: scrollX } } }],
					{ useNativeDriver: true },
				)}
				data={Array.from(new Array(10).keys())}
				keyExtractor={item => `${item}`}
				horizontal={true}
				pagingEnabled={true}
				showsHorizontalScrollIndicator={false}
				initialScrollIndex={1}
				ref={scrollRef}
				onContentSizeChange={(width, height) => {
					scrollContentSize.current.width = width;
					scrollContentSize.current.height = height;
				}}
				renderItem={({ item, index }) => (
					<View
						style={{
							justifyContent: 'center',
							alignItems: 'center',
							width,
						}}
					>
						<Animated.View
							style={{
								transform: [
									{
										scale: scrollX.interpolate({
											inputRange: [
												-1,
												0,
												ITEM_SIZE * index,
												ITEM_SIZE * (index + 2),
											],
											outputRange: [1, 1, 1, 0.3],
										}),
									},
								],
								width: IMG_WIDTH,
								height: IMG_HEIGHT,
								borderRadius: 10,
								backgroundColor: colors[index],
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<Text
								style={{
									fontSize: 24,
									paddingHorizontal: 10,
									borderRadius: 10,
									borderWidth: 1,
								}}
							>{`${item + 1}`}</Text>
						</Animated.View>
					</View>
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f5f5f5',
	},
	img: {
		height: '100%',
		width: '100%',
		borderRadius: 10,
	},
});
