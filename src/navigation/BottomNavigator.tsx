import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {memo} from 'react';
import {Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { HomeNavigator } from './HomeNavigator';

const BottomTab = createBottomTabNavigator();

const Home = () => {
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: '#ececec',
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			<Text style={{}}>Home tab</Text>
		</View>
	);
};
const DetailTab = () => {
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: '#ececec',
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			<Text style={{}}>Detail tab</Text>
		</View>
	);
};

export const BottomNavigator = memo(function BottomNavigator() {
	return (
		<BottomTab.Navigator
			screenOptions={({route}) => ({
				tabBarIcon: ({focused, color, size}) => {
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
					}

					// You can return any component that you like here!
					return (
						<Ionicons name={iconName} size={size} color={color} />
					);
				},
			})}
			tabBarOptions={{
				activeTintColor: 'tomato',
				inactiveTintColor: 'gray',
			}}>
			<BottomTab.Screen
				name="HomeTab"
				component={HomeNavigator}
				options={{
					title: 'Trang chủ',
				}}
			/>
			<BottomTab.Screen
				name="DetailTab"
				component={DetailTab}
				options={{
					title: 'Chi tiết',
				}}
			/>
		</BottomTab.Navigator>
	);
});
