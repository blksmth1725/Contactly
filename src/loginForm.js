import React from "react";
import {
	View,
	TextInput,
	Button,
	TouchableOpacity,
	StyleSheet,
} from "react-native";

export default function LoginForm({ navigation }) {
	return (
		<View style={{ height: 808, backgroundColor: "#E8E8E8" }}>
			<View style={styles.innerContainerSecond}>
				<View style={styles.inputCont2}>
					<TextInput style={styles.txtIn2} placeholder="Email" />
					<TextInput style={styles.txtIn2} placeholder="Password" />
				</View>
				<TouchableOpacity style={styles.formButton}>
					<Button
						title="Submit"
						onPress={() => navigation.navigate("App Home")}
					/>
				</TouchableOpacity>
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
	innerContainerSecond: {
		height: 808,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	inputCont2: {
		height: 460,
		marginTop: 170,
		backgroundColor: "transparent",
		display: "flex",
		justifyContent: "flex-start",
	},

	txtIn2: {
		paddingLeft: 15,
		height: 40,
		width: 320,
		backgroundColor: "white",
		borderRadius: 10,
		marginTop: 60,
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
