import { useState } from "react"
import { getCitySuntimes, getSchoolSuntimes } from "../data/api"
import './Sunrise.css'

const Sunrise = () => {
	const [schoolTimes, setSchoolTimes] = useState(null)
	const [cityTimes, setCityTimes] = useState(null)
	const [city, setCity] = useState('')
	const [cityTouched, setCityTouched] = useState(false)

	let cityIsValid = true
	let cityErrorMessage = ''
	let cityCss = 'form'
	if( city.length < 1 || city.length > 85 ) {
		cityIsValid = false
		if( cityTouched ) {
			cityErrorMessage = 'Fyll i mellan 1 och 85 bokstäver.'
			cityCss += ' error'
		}
	}
	const handleCityChange = event => {
		setCity(event.target.value)
		setCityTouched(true)	
	}
	
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
			<section className={cityCss}>
				<label> Skriv namnet på en stad </label>
				<input type="text" 
					value={city}
					onChange={handleCityChange}
					/>
				<p className="message"> {cityErrorMessage} </p>
				<button
					onClick={handleGetCity}
					disabled={!cityIsValid}
					> Men den här staden då? </button>
			</section>
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
