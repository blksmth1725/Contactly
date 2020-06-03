import React, { useState, useEffect, useCallback } from "react";
import {
	StyleSheet,
	Text,
	View,
	FlatList,
	TouchableOpacity,
} from "react-native";

import { page1, page2 } from "../pods";

const podIcon = require("./images/chemistryPod.png");

export default function AppHome() {
	const [data, setData] = useState([]);

	useEffect(() => {
		setTimeout(() => {
			setData(page1.data);
		}, 1500);
	}, []);

	const nextPage = () => {
		setData([...data, page2.data]);
	};

	return (
		<View style={styles.baseLayout}>
			<FlatList
				data={data}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<Text
						style={{
							backgroundColor: "#E8E8E8",
							height: 50,
							shadowOffset: { width: 0, height: 3 },
							shadowColor: "#c0c0c0",
							shadowOpacity: 1.0,
						}}
					>
						{item.Name}
					</Text>
				)}
				ListFooterComponent={
					<TouchableOpacity onPress={nextPage}>
						<Text>NEXT PAGE</Text>
					</TouchableOpacity>
				}
				ListEmptyComponent={<Text>LOADING...</Text>}
			/>
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
		height: 90,
		backgroundColor: "#E8E8E8",
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
		marginTop: 5,
		shadowOffset: { width: -2, height: -3 },
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
});
