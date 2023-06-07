import React, { useState } from "react";
import axios from "axios";
import "../Guestbook/Guestbook.css"

const Guestbook = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

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
		axios
			.post("/api/submit", formData)
			.then((response) => {
				console.log(response.data);
			})
			.catch((error) => {
				console.error(error);
			});
		console.log(formData); // Just printing the form data to the console for demonstration
	};

	return (
		<div className="form-container">
            <form onSubmit={handleSubmit}>
			<div>
				<label className="label" htmlFor="name">Name:</label>
				<input
					type="text"
					id="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
                    className="input"
				/>
			</div>
			<div>
				<label className="label" htmlFor="email">Email:</label>
				<input
					type="email"
					id="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
                    className="input"
				/>
			</div>
			<div>
				<label className="label" htmlFor="message">Message:</label>
				<textarea
					id="message"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
                    className="input"
				></textarea>
			</div>
			<button type="submit" className="submit-button">Submit</button>
		</form>
        </div>
	);
};

export default Guestbook;
