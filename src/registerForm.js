import React from "react";
import {
	StyleSheet,
	View,
	TextInput,
	TouchableOpacity,
	Button,
} from "react-native";

export default function RegisterForm({ navigation }) {
	return (
		<View style={{ height: 808, backgroundColor: "#E8E8E8" }}>
			<View style={styles.innerContainerFirst}>
				<View style={styles.inputCont1}>
					<TextInput style={styles.txtIn1} placeholder="First Name" />
					<TextInput style={styles.txtIn1} placeholder="Last Name" />
					<TextInput style={styles.txtIn1} placeholder="User Name" />
					<TextInput style={styles.txtIn1} placeholder="Email" />
					<TextInput style={styles.txtIn1} placeholder="Password" />
					<TextInput
						style={styles.txtIn1}
						placeholder="Confrim Password"
					/>
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
	innerContainerFirst: {
		height: 798,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	inputCont1: {
		height: 640,
		display: "flex",
		justifyContent: "space-evenly",
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
	txtIn1: {
		paddingLeft: 15,
		height: 40,
		width: 320,
		backgroundColor: "white",
		borderRadius: 10,
	},
});
