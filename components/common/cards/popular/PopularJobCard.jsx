import React from "react"
import PropTypes from "prop-types"
import { View, Text, TouchableOpacity, Image } from "react-native"

import styles from "./popularjobcard.style.js"
import { checkImageURL } from "../../../../utils/index.js"

const PopularJobCard = ({
	item,
	selectedJob = null,
	handleCardPress = () => {},
}) => {
	return (
		<TouchableOpacity
			style={styles.container(selectedJob, item)}
			onPress={() => handleCardPress(item)}
		>
			<TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
				<Image
					source={{
						uri: checkImageURL(item.employer_logo)
							? item.employer_logo
							: "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
					}}
					resizeMode="contain"
					style={styles.logoImage}
				/>
			</TouchableOpacity>
			<Text style={styles.companyName} numberOfLines={1}>
				{item.employer_name}
			</Text>

			<View style={styles.infoContainer}>
				<Text
					style={styles.jobName(selectedJob, item)}
					numberOfLines={1}
				>
					{item.job_title}
				</Text>
				<Text style={styles.location}>
					{item.job_city}, {item.job_state}, {item.job_country}
				</Text>
			</View>
		</TouchableOpacity>
	)
}

PopularJobCard.propTypes = {
	item: PropTypes.shape({
		employer_logo: PropTypes.string,
		employer_name: PropTypes.string.isRequired,
		job_title: PropTypes.string.isRequired,
		job_city: PropTypes.string,
		job_state: PropTypes.string,
		job_country: PropTypes.string,
	}).isRequired,
	selectedJob: PropTypes.object,
	handleCardPress: PropTypes.func,
}

export default PopularJobCard
