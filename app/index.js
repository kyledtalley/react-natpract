// import { useState } from "react"
import { View, ScrollView, SafeAreaView } from "react-native"
import { Stack } from "expo-router"
// import { useRouter } from "expo-router"

import { COLORS, icons, images } from "../constants"
import { SIZES } from "../constants/theme.js"
// import { FONTS } from "../constants/theme.js"

import Nearbyjobs from "../components/home/nearby/Nearbyjobs.jsx"
import Popularjobs from "../components/home/popular/Popularjobs.jsx"
import ScreenHeaderBtn from "../components/common/header/ScreenHeaderBtn.jsx"
import Welcome from "../components/home/welcome/Welcome.jsx"

const Home = () => {
	// const router = useRouter()

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
			<Stack.Screen
				options={{
					headerStyle: {
						backgroundColor: COLORS.lightWhite,
					},
					headerShadowVisible: false,
					headerLeft: () => (
						<ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
					),
					headerRight: () => (
						<ScreenHeaderBtn
							iconUrl={images.profile}
							dimension="100%"
						/>
					),
					headerTitle: "",
				}}
			/>

			<ScrollView showsVerticalScrollIndicator={false}>
				<View
					style={{
						flex: 1,
						padding: SIZES.medium,
						backgroundColor: COLORS.lightWhite,
					}}
				>
					<Welcome />
					<Popularjobs />
					<Nearbyjobs />
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default Home
