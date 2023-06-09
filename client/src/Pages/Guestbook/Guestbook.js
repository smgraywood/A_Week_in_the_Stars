import React, { useState, useEffect } from "react";
import "../Guestbook/Guestbook.css";
import axios from "axios";

const Guestbook = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [entries, setEntries] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		// Send the form data to the server
		const formData = { name, email, message };
		// Call a function to send the data to the server
		sendData(formData);
		// Reset the form
		setName("");
		setEmail("");
		setMessage("");
	};

	const sendData = (formData) => {
		axios
			.post(`${process.env.SERVER}/guestbook/`, formData, {
				headers: {
					"Content-Type": "application/json",
				},
			})
			.then((response) => {
				console.log("Request successful");
				console.log(response.data);
				fetchEntries();
			})
			.catch((error) => {
				console.log("Request failed");
				console.log(error);
			});

		console.log(formData);
	};

	useEffect(() => {
		fetchEntries();
	}, []);

	const fetchEntries = () => {
		axios
			.get("/guestbook", {
				headers: {
					"Content-Type": "application/json",
				},
			})
			.then((response) => {
				console.log("Request successful");
				console.log(response.data);
				const responseData = response.data;
				setEntries(responseData);
			})
			.catch((error) => {
				console.log("Request failed");
				console.log(error);
			});
	};

	return (
		<>
			<div className="form-container">
				<form onSubmit={handleSubmit}>
					<div>
						<label className="label" htmlFor="name">
							Name:
						</label>
						<input
							type="name"
							id="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							className="input"
						/>
					</div>
					<div>
						<label className="label" htmlFor="email">
							Email:
						</label>
						<input
							type="email"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="input"
						/>
					</div>
					<div>
						<label className="label" htmlFor="message">
							Message:
						</label>
						<textarea
							type="message"
							id="message"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							className="input"
						></textarea>
					</div>
					<button type="submit" className="submit-button">
						Submit
					</button>
				</form>
			</div>
			<div className="entries-container">
				<h2>Guestbook Entries</h2>
			</div>
			<ul className="list">
				{entries.map((entry, index) => (
					<div className="message-container" key={index}>
						<strong>Name:</strong> {entry.name}
						<br />
						<strong>Message:</strong> {entry.message}
						<br />
					</div>
				))}
			</ul>
		</>
	);
};

export default Guestbook;
