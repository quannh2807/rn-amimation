import { createStackNavigator } from '@react-navigation/stack';
import React, { memo } from 'react';
import { DetailScreen } from '../screens/DetailScreen';
import { HomeScreen } from '../screens/Home/HomeScreen';

const HomeStack = createStackNavigator();

export const HomeNavigator = memo(function HomeNavigator() {
	return (
		<HomeStack.Navigator
			headerMode="float"
			initialRouteName="Home">
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
		</HomeStack.Navigator>
	);
});
