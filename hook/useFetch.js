import { useState, useEffect } from "react"
import axios from "axios"

const useFetch = (endpoint, query) => {
	const [data, setData] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)

	const options = {
		method: "GET",
		url: `https://jsearch.p.rapidapi.com/${endpoint}`,
		headers: {
			"X-RapidAPI-Key":
				"4d16f43afemsh94bce440fc498c3p124404jsnd89364699095",
			"X-RapidAPI-Host": "jsearch.p.rapidapi.com",
		},
		params: { ...query },
	}

	const fetchData = async () => {
		setIsLoading(true)

		try {
			const response = await axios.request(options)
			console.log("Data fetched:", response.data.data) // Add this line
			setData(response.data.data)
			setIsLoading(false)
		} catch (error) {
			setError(error)
			console.error("Error fetching data:", error) // Add this line
			alert(
				"There is an error fetching the data. Please try again later."
			)
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		fetchData()
	}, [])

	const refetch = () => {
		setIsLoading(true)
		fetchData()
	}

	return { data, isLoading, error, refetch }
}

export default useFetch
