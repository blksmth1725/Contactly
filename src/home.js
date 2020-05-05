import React from "react";
import {
	View,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
	Button,
} from "react-native";

export default function AppHome({ navigation }) {
	return (
		<View style={{ height: 808, backgroundColor: "#E8E8E8" }}>
			<View style={styles.innerContainerHome}>
				<View style={styles.Sview}>
					<ScrollView
						style={{
							backgroundColor: "#E8E8E8",
						}}
						contentContainerStyle={{ width: 680 }}
						horizontal={true}
						showsHorizontalScrollIndicator={false}
						scrollEventThrottle={10}
						pagingEnabled
					>
						<TouchableOpacity style={styles.moodCard}>
							<Button
								title="Happy"
								onPress={() => navigation.navigate("Mood Card")}
							/>
						</TouchableOpacity>
					</ScrollView>
				</View>
				<View style={styles.mainContainer}></View>
				<View style={styles.baselineButton}></View>
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

	innerContainer: {
		backgroundColor: "orange", //"transparent"
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

	innerContainerSecond: {
		height: 808,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	innerContainerHome: {
		height: 808,
		display: "flex",
		justifyContent: "center",
	},
	Sview: {
		height: 130,
		backgroundColor: "transparent",
		shadowOffset: { width: -2, height: 3 },
		shadowColor: "#c0c0c0",
		shadowOpacity: 1.0,
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
	baselineButton: {
		height: 100,
		backgroundColor: "#E8E8E8",
		shadowOffset: { width: -2, height: -3 },
		shadowColor: "#c0c0c0",
		shadowOpacity: 1.0,
	},
	mainContainer: {
		backgroundColor: "#E8E8E8",
		height: 560,
		marginTop: 5,
		shadowOffset: { width: -2, height: -3 },
		shadowColor: "#c0c0c0",
		shadowOpacity: 1.0,
	},
	moodCard: {
		height: 90,
		width: 90,
		backgroundColor: "orange", //"#E8E8E8"
		borderRadius: 20,
		justifyContent: "center",
		marginTop: 16,
		marginLeft: 23,
		shadowOffset: { width: 0, height: 3 },
		shadowColor: "#c0c0c0",
		shadowOpacity: 1.0,
	},
});
