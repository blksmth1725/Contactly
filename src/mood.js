import React from "react";
import { StyleSheet, Text, View } from "react-native";

import MoodCards from "./moodCards";
import { ScrollView } from "react-native-gesture-handler";

export default function MoodConatainer() {
	return (
		<View style={styles.moodContainer}>
			<View style={styles.title}>
				<Text style={styles.textCatStyle}>MOODS</Text>
			</View>

			<View style={styles.moodShadow}>
				<View style={styles.moodCardsContainer}>
					<ScrollView
						style={{
							height: 170,
							backgroundColor: "transparent",
							borderBottomLeftRadius: 40,
							borderTopLeftRadius: 40,
						}}
						showsHorizontalScrollIndicator={false}
						contentContainerStyle={{ width: 1000 }}
						scrollEventThrottle={600}
						decelerationRate="fast"
						horizontal={true}
					>
						<MoodCards />
						<MoodCards />
						<MoodCards />
						<MoodCards />
						<MoodCards />
						<MoodCards />
						<MoodCards />
					</ScrollView>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	moodContainer: {
		display: "flex",
		flex: 2,
		flexDirection: "column",
		height: 150,
		shadowOffset: { width: 5, height: 0 },
		shadowRadius: 20,
		shadowColor: "#c0c0c0",
		shadowOpacity: 1.0,
		//backgroundColor: "#E8E8E8",
	},
	title: {
		marginTop: 10,
		marginBottom: 10,
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		height: 40,
		width: 414,
		//backgroundColor: "#E8E8E8",
	},
	textCatStyle: {
		fontSize: 20,
		fontWeight: "600",
	},
	moodShadow: {
		shadowOffset: { width: 0, height: 0 },
		shadowRadius: 20,
		shadowColor: "#c0c0c0",
		shadowOpacity: 1,
	},
	moodCardsContainer: {
		borderTopLeftRadius: 40,
		borderBottomLeftRadius: 40,
		marginLeft: 15,
		backgroundColor: "#E8E8E8",
		display: "flex",
		flexDirection: "row",
		width: 414,
		height: 168,
	},
});
