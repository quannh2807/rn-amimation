import { createStackNavigator } from '@react-navigation/stack';
import React, { memo } from 'react';
import { DetailScreen } from '../screens/DetailScreen';
import { HomeScreen } from '../screens/Home/HomeScreen';
import { ListItem } from '../screens/List/ListItem';
import { ScrollHorizontal } from '../screens/ScrollHorizontal/ScrollHorizontal';
import { StackCarousel } from '../screens/StackCarousel/StackCarousel';

const HomeStack = createStackNavigator();

export const HomeNavigator = memo(function HomeNavigator() {
	return (
		<HomeStack.Navigator headerMode="float" initialRouteName="Home">
			<HomeStack.Screen
				name="Home"
				component={HomeScreen}
				options={{
					headerShown: false,
				}}
			/>
			<HomeStack.Screen
				name="Detail"
				component={DetailScreen}
				options={{
					title: 'Chi tiết',
				}}
			/>
			<HomeStack.Screen
				name="ListItem"
				component={ListItem}
				options={{
					title: 'Scroll Vertical List Item',
				}}
			/>
			<HomeStack.Screen
				name="ScrollHorizontal"
				component={ScrollHorizontal}
				options={{
					title: 'Scroll Horizontal',
				}}
			/>
			<HomeStack.Screen
				name="StackCarousel"
				component={StackCarousel}
				options={{
					title: 'Stack Carousel Animations',
				}}
			/>
		</HomeStack.Navigator>
	);
});
