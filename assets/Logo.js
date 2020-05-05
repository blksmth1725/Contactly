import React from "react";
import { StyleSheet, View } from "react-native";

export default function Logo() {
	return <View style={styles.logo} />;
}

const styles = StyleSheet.create({
	logo: {
		backgroundColor: "#ff8833",
		marginTop: 170,
		borderRadius: 15,
		height: 202,
		width: 202,
	},
});
