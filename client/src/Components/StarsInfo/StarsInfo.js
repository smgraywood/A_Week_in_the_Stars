import { useEffect, useState } from "react";
import axios from "axios";
import shootingstar from "../../Images/shooting-star.gif";
import "./StarsInfo.css";

const StarsInfo = () => {
	const [stars, setStars] = useState([]);
	const [loading, setLoading] = useState(false);

	const options = {
		method: "GET",
		url: "https://api.nasa.gov/planetary/apod?api_key=Mb6FbMl5smhTEeciTTtci4ZJmnGJhZeU1qZKv6xK",
		params: {
			start_date: new Date(
				Date.now() - 7 * 24 * 60 * 60 * 1000
			).toLocaleDateString("en-CA"), //how to get one week agos date
			end_date: new Date().toLocaleDateString("en-CA"),
		},
	};
	const apiCall = async () => {
		try {
			const response = await axios.request(options);
			setStars(response.data);
			setLoading(!loading);
			console.log(stars);
		} catch (error) {
			console.error(error);
		}
	};
	useEffect(() => {
		apiCall();
	}, []);

	const StarItem = ({ star }) => (
		<div className="star-container">
			<div className="img-title-date-container">
				<img
					className="nasa-image"
					src={star.url}
					alt="nasa pic for listed date"
				/>
				<p className="nasa-title">{star.title}</p>
				<p className="nasa-date">{star.date}</p>
			</div>
			<div className="nasa-explanation-container">
				<p className="nasa-explanation">{star.explanation}</p>
			</div>
		</div>
	);

	return (
		<div className="Stars">
			{loading ? (
				<>
					<h1 className="stars-title">This Week in the Stars...</h1>
					{stars.map((star, index) => (
						<StarItem key={index} star={star} />
					))}
				</>
			) : (
				<img
					src={shootingstar}
					alt="a gif of a shooting star with the text 'make a wish'"
				/>
			)}
		</div>
	);
};

export default StarsInfo;
