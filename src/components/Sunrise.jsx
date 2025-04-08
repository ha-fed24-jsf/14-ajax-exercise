const Sunrise = () => {


	return (
		<div className="sunrise">
			<h2> Skolan </h2>
			<p>
				Idag gick solen upp klockan .... och förväntas gå ner klockan ...
			</p>
			<button> Hämta soltider för skolan </button>

			<hr />

			<h2> Geocoding </h2>
			<p> Skriv namnet på en stad: <input type="text" value="Haparanda" /> <button> Men den här staden då? </button> </p>
			<p> I Haparanda gick solen upp kl ... idag och förväntas gå ner kl .... </p>
			<hr />

			<h2> Reverse geocoding </h2>
			<p> Skriv latitud och longitud: <input type="text" value="57.1" /> <input type="text" value="11.9" /> <button> Vad finns här? </button> </p>
			<p> Verkar som att ... ligger på den platsen. </p>
			<p> Solen gick upp kl ... idag och förväntas gå ner kl .... </p>

		</div>
	)
}
export default Sunrise
