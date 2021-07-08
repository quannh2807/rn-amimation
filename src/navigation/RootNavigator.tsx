import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { memo } from 'react';
import { BottomNavigator } from './BottomNavigator';

const Stack = createStackNavigator();

export const RootNavigator = memo(function RootNavigator() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				headerMode="none"
				initialRouteName="BottomNavigator">
				<Stack.Screen
					name="BottomNavigator"
					component={BottomNavigator}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
});
