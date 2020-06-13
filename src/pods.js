import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, List, FlatList, ListItem } from "react-native";

import { SafeAreaView } from "react-navigation";

import { PodsList } from "../pods";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function PodContainer() {
	const [data, setData] = useState([]);

	useEffect(() => {
		setTimeout(() => {
			setData(PodsList.DATA);
		}, 1500);
	}, []);

	return (
		<View style={styles.podsContainer}>
			<View style={styles.titleContainer}>
				<Text style={styles.textCatStyle}>PODS</Text>
			</View>
			<SafeAreaView
				style={{
					shadowOffset: { width: 5, height: 0 },
					shadowRadius: 20,
					shadowColor: "#c0c0c0",
					shadowOpacity: 1.0,
				}}
			>
				<FlatList
					data={data}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => (
						<TouchableOpacity>
							<View style={styles.flatListItem}>
								<View style={styles.name}>
									<Text>{item.Name}</Text>
								</View>
								<View style={styles.date}>
									<Text>{item.Date}</Text>
								</View>
							</View>
						</TouchableOpacity>
					)}
				/>
			</SafeAreaView>
		</View>
	);
}

const styles = StyleSheet.create({
	titleContainer: {
		marginTop: 40,
		marginBottom: -10,
		height: 50,
		backgroundColor: "transparent",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
	textCatStyle: {
		fontSize: 20,
		fontWeight: "600",
	},
	podsContainer: {
		height: 430,
		marginBottom: 75,
	},
	flatListItem: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		borderBottomLeftRadius: 30,
		borderTopLeftRadius: 30,
		marginTop: 25,
		marginLeft: 15,
		backgroundColor: "#E8E8E8",
		height: 100,
		shadowOffset: { width: 5, height: 0 },
		shadowRadius: 20,
		shadowColor: "#c0c0c0",
		shadowOpacity: 1.0,
	},
});
