import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	Text,
	View,
	FlatList,
	TouchableOpacity,
	Button,
} from "react-native";

import { PodsList } from "../pods";
import { SafeAreaView } from "react-navigation";

const podIcon = require("./images/chemistryPod.png");

export default function AppHome() {
	const [data, setData] = useState([]);

	useEffect(() => {
		setTimeout(() => {
			setData(PodsList.DATA);
		}, 1500);
	}, []);

	return (
		<View style={styles.baseLayout}>
			<View
				style={{
					height: 50,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Text>MOOD</Text>
			</View>
			<View style={styles.moodView}></View>
			<View
				style={{
					height: 50,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Text>PODS</Text>
			</View>
			<SafeAreaView
				style={{
					height: 500,
				}}
			>
				<FlatList
					data={data}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => (
						<Text
							style={{
								backgroundColor: "#E8E8E8",
								height: 100,
								shadowOffset: { width: 0, height: 3 },
								shadowColor: "#c0c0c0",
								shadowOpacity: 1.0,
							}}
						>
							{item.Name}
							{item.Date}
						</Text>
					)}
				/>
			</SafeAreaView>
			<View>
				<TouchableOpacity style={styles.baselineButton}>
					<Button
						title="Baseline"
						onPress={() => navigation.navigate("Baseline")}
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
	},
	moodView: {
		height: 120,
		backgroundColor: "orange", //"#E8E8E8",
		shadowOffset: { width: -2, height: 3 },
		shadowColor: "#c0c0c0",
		shadowOpacity: 1.0,
	},
	podsContainer: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-evenly",
		backgroundColor: "#E8E8E8" /*"#E8E8E8"*/,
		height: 610,
		shadowOffset: { width: -2, height: -3 },
		shadowColor: "#c0c0c0",
		shadowOpacity: 1.0,
	},

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
