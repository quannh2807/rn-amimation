import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { memo } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { HomeNavigator } from './HomeNavigator';

const BottomTab = createBottomTabNavigator();

export const BottomNavigator = memo(function BottomNavigator() {
	return (
		<BottomTab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;

					switch (route.name) {
						case 'HomeTab':
							iconName = focused ? 'home' : 'home-outline';
							break;
						case 'DetailTab':
							iconName = focused
								? 'information'
								: 'information-outline';
							break;
						default:
							iconName = focused ? 'close' : 'close-outline';
							break;
					}

					return (
						<Ionicons name={iconName} size={size} color={color} />
					);
				},
			})}
			tabBarOptions={{
				activeTintColor: 'tomato',
				inactiveTintColor: 'gray',
			}}
		>
			<BottomTab.Screen
				name="HomeTab"
				component={HomeNavigator}
				options={{
					title: 'Trang chủ',
				}}
			/>
		</BottomTab.Navigator>
	);
});
