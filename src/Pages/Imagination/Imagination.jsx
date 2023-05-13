import { useEffect, useState } from "react";
import axios from "axios";

function Imagination() {
	const [quote, setQuote] = useState([]);
	const [loading, setLoading] = useState(false);

	const options = {
		method: "GET",
		url: "https://api.api-ninjas.com/v1/quotes?category=",
		params: {
			category: "imagination",
			limit: "1",
		},
		headers: {
			// "X-Api-Key": "IVtQmp37gd3NE3SPDKRrLQ==79hqzLO1QtGnyTs9",
		},
	};
	const apiCall = async () => {
		try {
			const response = await axios.request(options);
			setQuote(response.data);
			setLoading(!loading);
			console.log(quote);
		} catch (error) {
			console.error(error);
		}
	};
	useEffect(() => {
		apiCall();
	}, []);

	return (
		<div className="Imagination">
			{loading ? (
				<>
					<div className="quote-container">
						<p className="quote">{quote[0].quote}</p>
						<p className="author">{quote[0].author}</p>{" "}
					</div>
				</>
			) : (
				<>
					<h1>Imagination...</h1>
				</>
			)}
		</div>
	);
}

export default Imagination;
