// skolan ligger på latitud=57.6731597 och longitud=11.8787299
// Standard URL:
// https://api.sunrisesunset.io/json?lat=38.907192&lng=-77.036873

const cageApiKey = '8145e82c69ce4aa1bb09c9199cc5d2ed'

async function getSchoolSuntimes(saveData) {
	const school = { lat: 57.6731597, lng: 11.8787299 }
	const url = `https://api.sunrisesunset.io/json?lat=${school.lat}&lng=${school.lng}`
	const settings = {}
	try {
		const response = await fetch(url, settings)
			const data = await response.json()
			// { results: { sunrise, sunset }}
			const result = { sunrise: data.results.sunrise, sunset: data.results.sunset }
			console.log('Datan från API: ', data)
			console.log('Förenklad data: ', result)
		saveData(result)

	} catch(error) {
		console.error('Fel från API:', error.message)
	}
}

// async function getSuntimes(lat, lng)

async function getCitySuntimes(saveData, address) {
	const url = `https://api.opencagedata.com/geocode/v1/json?q=${address}&key=${cageApiKey}`
	const settings = {}
	try {
		const response = await fetch(url, settings)
		const data = await response.json()
		console.log('Datan från API: ', data)
		// { results: [ { formatted, geometry: { lat, lng } } ]}
		const results = {
			city: data.results[0].formatted,
			lat: data.results[0].geometry.lat,
			lng: data.results[0].geometry.lng,
		}
		console.log('Förenklad data: ', results)

		const url2 = `https://api.sunrisesunset.io/json?lat=${results.lat}&lng=${results.lng}`
		const response2 = await fetch(url2, settings)
		const data2 = await response2.json()
		// { results: { sunrise, sunset }}
		
		results.sunrise = data2.results.sunrise
		results.sunset = data2.results.sunset
		
		saveData(results)
		console.log('Förenklad data: ', results)

	} catch(error) {
		console.error('Fel från API:', error.message)
	}

}

export { getSchoolSuntimes, getCitySuntimes }
