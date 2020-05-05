import * as React from "react";
import { View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import BaseLayout from "./src/baseLayout";
import RegisterForm from "./src/registerForm";
import LoginForm from "./src/loginForm";
import AppHome from "./src/home";

function MoodCard() {
	return <View style={{ height: 808, backgroundColor: "#E8E8E8" }}></View>;
}

const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName={"BaseLayout"}>
				<Stack.Screen name="BaseLayout" component={BaseLayout} />
				<Stack.Screen name="Sign Up" component={RegisterForm} />
				<Stack.Screen name="Login" component={LoginForm} />
				<Stack.Screen name="App Home" component={AppHome} />
				<Stack.Screen name="Mood Card" component={MoodCard} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
