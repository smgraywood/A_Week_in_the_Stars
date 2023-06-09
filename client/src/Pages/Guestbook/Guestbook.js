import React, { useState, useEffect } from "react";
import "../Guestbook/Guestbook.css";

const Guestbook = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
    const [entries, setEntries] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();

		// Perform validation on the form data
		// ...

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
		// Make an HTTP POST request to the server
		const xhr = new XMLHttpRequest();
		xhr.open("POST", "http://localhost:8010/proxy/guestbook/");
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.onreadystatechange = function () {
			if (xhr.readyState === XMLHttpRequest.DONE) {
				if (xhr.status >= 200 && xhr.status < 300) {
					console.log("Request successful");
					console.log(xhr.responseText);
				} else {
					console.log("Request failed");
					console.log(xhr.status);
				}
			}
		};
		xhr.send(JSON.stringify(formData));
		console.log(formData);
	};
    

	return (
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
	);
};

export default Guestbook;
