import React from "react";
import { View, TouchableOpacity, Button, StyleSheet } from "react-native";

export default function BaseLayout({ navigation }) {
	return (
		<View style={styles.baseLayout}>
			<View style={styles.innerContainer}>
				<View style={styles.logo}></View>
				<View style={styles.buttonContainer}>
					<TouchableOpacity style={styles.formButton}>
						<Button
							title="Register"
							onPress={() => navigation.navigate("Sign Up")}
						/>
					</TouchableOpacity>

					<TouchableOpacity style={styles.formButton}>
						<Button
							title="Login"
							onPress={() => navigation.navigate("Login")}
						/>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	baseLayout: {
		backgroundColor: "#E8E8E8",
		height: 808,
		display: "flex",
		justifyContent: "flex-end",
		alignItems: "center",
	},
	logo: {
		backgroundColor: "#E8E8E8",
		height: 180,
		width: 180,
		borderRadius: 20,
		shadowOffset: { width: 0, height: 3 },
		shadowColor: "#c0c0c0",
		shadowOpacity: 1.0,
	},
	innerContainer: {
		backgroundColor: "transparent",
		height: 650,
		marginBottom: 60,
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	},
	buttonContainer: {
		height: 180,
		display: "flex",
		justifyContent: "space-between",
	},
	formButton: {
		height: 60,
		width: 320,
		backgroundColor: "#E8E8E8",
		borderRadius: 20,
		display: "flex",
		justifyContent: "center",
		shadowOffset: { width: 0, height: 3 },
		shadowColor: "#c0c0c0",
		shadowOpacity: 1.0,
	},
});
