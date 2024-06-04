import {
	View,
	Text,
	TouchableOpacity,
	FlatList,
	ActivityIndicator,
} from "react-native"

import { useState } from "react"
import styles from "./popularjobs.style"
import { COLORS, SIZES } from "../../../constants"
import PopularJobCard from "../../common/cards/popular/PopularJobCard"
import useFetch from "../../../hook/useFetch"

const Popularjobs = () => {
	const { data, isLoading, error } = useFetch("search", {
		query: "React developer",
		num_pages: "1",
	})

	const [selectedJob, setSelectedJob] = useState()

	const handleCardPress = (item) => {
		setSelectedJob(item)
	}

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerTitle}>Popular Jobs</Text>
				<TouchableOpacity>
					<Text style={styles.headerBtn}>Show All</Text>
				</TouchableOpacity>
				{/* <TouchableOpacity onPress={() => router.push("search")}>
                    <Text style={styles.headerBtn}>Search</Text>
                </TouchableOpacity> */}
			</View>

			<View style={styles.cardsContainer}>
				{isLoading ? (
					<ActivityIndicator size="large" color={COLORS.primary} />
				) : error ? (
					<Text>Something went wrong</Text>
				) : (
					<FlatList
						data={data}
						renderItem={({ item }) => (
							<PopularJobCard
								item={item}
								selectedJob={selectedJob}
								handleCardPress={handleCardPress}
							/>
						)}
						keyExtractor={(item) => item?.job_id}
						contentContainerStyle={{ columnGap: SIZES.medium }}
						horizontal
					/>
				)}
			</View>
		</View>
	)
}

PopularJobCard.defaultProps = {
	selectedJob: null,
	handleCardPress: () => {},
}

export default Popularjobs
