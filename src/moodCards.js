import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

export default function MoodCards() {
	return (
		<View>
			<View style={styles.cardContainer}>
				<Text>MOOD</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	cardContainer: {
		marginLeft: 25,
		marginTop: 25,
		display: "flex",
		justifyContent: "space-evenly",
		alignItems: "center",
		borderRadius: 25,
		shadowOffset: { width: 0, height: 0 },
		shadowRadius: 15,
		shadowColor: "#c0c0c0",
		shadowOpacity: 2.0,
		backgroundColor: "#E8E8E8", //"orange",
		height: 120,
		width: 120,
	},
});
