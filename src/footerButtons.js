import React from "react";
import { View, TouchableOpacity, Button, StyleSheet } from "react-native";

export default function FooterButton() {
	return (
		<View>
			<TouchableOpacity style={styles.baselineButton}>
				<Button
					title="Baseline"
					onPress={() => navigation.navigate("Baseline")}
				/>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	baselineButton: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		height: 100,
		backgroundColor: "#E8E8E8",
		shadowOffset: { width: -2, height: -3 },
		shadowColor: "#c0c0c0",
		shadowOpacity: 1.0,
	},
});
