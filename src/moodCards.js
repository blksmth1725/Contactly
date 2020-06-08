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
		display: "flex",
		justifyContent: "space-evenly",
		alignItems: "center",
		borderRadius: 25,
		marginRight: 30,
		shadowOffset: { width: 5, height: 0 },
		shadowRadius: 20,
		shadowColor: "#c0c0c0",
		backgroundColor: "orange",
		height: 120,
		width: 120,
	},
});
