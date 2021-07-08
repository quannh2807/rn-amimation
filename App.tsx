import 'react-native-gesture-handler';
import * as React from 'react';
import {RootNavigator} from './src/navigation/RootNavigator';
import {StatusBar} from 'react-native';

export default function App() {
	return (
		<>
			<StatusBar
				translucent={true}
				backgroundColor={'transparent'}
				barStyle={'dark-content'}
			/>

			<RootNavigator />
		</>
	);
}
