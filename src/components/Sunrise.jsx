import { useState } from "react"
import { getCitySuntimes, getSchoolSuntimes } from "../data/api"

const Sunrise = () => {
	const [schoolTimes, setSchoolTimes] = useState(null)
	const [cityTimes, setCityTimes] = useState(null)
	const [city, setCity] = useState('Haparanda')

	const handleGetSchool = () => {
		getSchoolSuntimes(setSchoolTimes)
	}
	const handleGetCity = () => {
		getCitySuntimes(setCityTimes, city)
	}
	
	return (
		<div className="sunrise">
			<h2> Skolan </h2>
			<section>
				{schoolTimes ? (
					<p> Idag gick solen upp klockan {schoolTimes.sunrise} och förväntas gå ner klockan {schoolTimes.sunset} </p>
				) : (
					<p> Klicka på knappen för att hämta datan </p>
				)}
			</section>
			<button onClick={handleGetSchool}> Hämta soltider för skolan </button>

			<hr />

			<h2> Geocoding </h2>
			<p> Skriv namnet på en stad: 
				<input type="text" 
					value={city}
					onChange={event => setCity(event.target.value)}
					/>
				<button onClick={handleGetCity}> Men den här staden då? </button>
			</p>
			<section>
				{cityTimes ? (
					<p> I "{cityTimes.city}" gick solen upp kl ... idag och förväntas gå ner kl .... </p>
				) : (
					<p> Vänligen skriv en stad och klicka! </p>
				)}
			</section>
			
			{/* <hr />

			<h2> Reverse geocoding </h2>
			<p> Skriv latitud och longitud: <input type="text" value="57.1" /> <input type="text" value="11.9" /> <button> Vad finns här? </button> </p>
			<p> Verkar som att ... ligger på den platsen. </p>
			<p> Solen gick upp kl ... idag och förväntas gå ner kl .... </p> */}

		</div>
	)
}
export default Sunrise
