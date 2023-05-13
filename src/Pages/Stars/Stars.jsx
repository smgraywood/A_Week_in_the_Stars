import { useEffect, useState } from "react";
import axios from "axios";

const Stars = () => {

        const start_date= new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toLocaleDateString('en-CA')
        console.log(start_date)

        const [stars, setStars] = useState([]);
        const [loading, setLoading] = useState(false);
    
        const options = {
            method: "GET",
            url: "https://api.nasa.gov/planetary/apod?api_key=XYYh7uKlPTuv6YJnuydI7oRi3ipXZfDht3VDDoGH",
            params: {
                start_date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toLocaleDateString('en-CA'),//how to get one week agos date,,
                end_date: new Date().toLocaleDateString('en-CA'),
            },
            headers: {
                // "X-Api-Key": "IVtQmp37gd3NE3SPDKRrLQ==79hqzLO1QtGnyTs9",
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
    
        return (
            <div className="Stars">
                {loading ? (
                    <>
                        <div className="star-container">
                            <p className="nasa-date">{stars[0].date}</p>
                            <img className="nasa-image" src={stars[0].url}></img>{" "}
                            <p className="nasa-title">{stars[0].title}</p>{" "}
                            <p className="nasa-explanation">{stars[0].explanation}</p>{" "}
                        </div>
                        <div className="star-container">
                            <p className="nasa-date">{stars[1].date}</p>
                            <img className="nasa-image" src={stars[1].url}></img>{" "}
                            <p className="nasa-title">{stars[1].title}</p>{" "}
                            <p className="nasa-explanation">{stars[1].explanation}</p>{" "}
                        </div>
                        <div className="star-container">
                            <p className="nasa-date">{stars[2].date}</p>
                            <img className="nasa-image" src={stars[2].url}></img>{" "}
                            <p className="nasa-title">{stars[2].title}</p>{" "}
                            <p className="nasa-explanation">{stars[2].explanation}</p>{" "}
                        </div>
                        <div className="star-container">
                            <p className="nasa-date">{stars[3].date}</p>
                            <img className="nasa-image" src={stars[3].url}></img>{" "}
                            <p className="nasa-title">{stars[3].title}</p>{" "}
                            <p className="nasa-explanation">{stars[3].explanation}</p>{" "}
                        </div>
                        <div className="star-container">
                            <p className="nasa-date">{stars[4].date}</p>
                            <img className="nasa-image" src={stars[4].url}></img>{" "}
                            <p className="nasa-title">{stars[4].title}</p>{" "}
                            <p className="nasa-explanation">{stars[4].explanation}</p>{" "}
                        </div>
                        <div className="star-container">
                            <p className="nasa-date">{stars[5].date}</p>
                            <img className="nasa-image" src={stars[5].url}></img>{" "}
                            <p className="nasa-title">{stars[5].title}</p>{" "}
                            <p className="nasa-explanation">{stars[5].explanation}</p>{" "}
                        </div>
                        <div className="star-container">
                            <p className="nasa-date">{stars[6].date}</p>
                            <img className="nasa-image" src={stars[6].url}></img>{" "}
                            <p className="nasa-title">{stars[6].title}</p>{" "}
                            <p className="nasa-explanation">{stars[6].explanation}</p>{" "}
                        </div>
                    </>
                ) : (
                    <>
                        <h1>Stars...</h1>
                    </>
                )}
            </div>
        );
}

export default Stars