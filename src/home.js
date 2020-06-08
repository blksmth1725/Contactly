import React from "react";
import { View, StyleSheet } from "react-native";

import MoodContainer from "./mood";
import PodContainer from "./pods";
import FooterButton from "./footerButtons";

export default function AppHome() {
	return (
		<View style={styles.baseLayout}>
			<MoodContainer />
			<PodContainer />
			<FooterButton />
		</View>
	);
}

const styles = StyleSheet.create({
	baseLayout: {
		backgroundColor: "#E8E8E8",
		height: 808,
		display: "flex",
	},
});
