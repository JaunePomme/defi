import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import "./Home.css";

const Button = styled.button`
	background-color: #a5d6a7;
	border-radius: 12px;
    border: 3px solid
	color: #a5d6a7;
	margin: 0 1em;
	font-size: 20px;
    height:35px;
    width:100px;
    margin: 10px;
	:hover {
		background-color: white;
		border: 2px solid #a5d6a7;
	}
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-item: center;
	font-size: 20px;
	background: transparent;
	border-radius: 3px;
	border: 2px solid #a5d6a7;
	margin: 0 1em;
	padding: 0.25em 1em;
`;

const Input = styled.input`
	background-color: #a5d6a7;
	border-radius: 12px;
	border: 0;
	box-sizing: border-box;
	color: black;
	font-size: 18px;
	padding: 4px 20px 0;
`;

const Label = styled.label`
	color: palevioletred;
`;
export default function Home() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [mail, setMail] = useState("");
	const [phone, setPhone] = useState("");

	const history = useHistory();
	const handleSubmit = (e) => {
		e.preventDefault();
		history.push({
			pathname: "/newpage",
			state: {
				firstName: firstName,
				lastName: lastName,
				mail: mail,
				phone: phone,
			},
		});
	};
	return (
		<div className="center-div">
			<Form onSubmit={handleSubmit}>
				<Label>First name:</Label>
				<Input
					type="text"
					required
					value={firstName}
					placeholder="first name here.."
					onChange={(e) => setFirstName(e.target.value)}
				/>

				<Label>Last name:</Label>
				<Input
					type="text"
					required
					value={lastName}
					placeholder="last name here.."
					onChange={(e) => setLastName(e.target.value)}
				/>

				<Label>Mail:</Label>
				<Input
					type="email"
					required
					value={mail}
					placeholder="mail here.."
					onChange={(e) => setMail(e.target.value)}
				/>

				<Label>Phone:</Label>
				<Input
					value={phone}
					placeholder="+33(6).."
					onChange={(e) => setPhone(e.target.value)}
				/>
				<Button type="submit">Submit</Button>
			</Form>
		</div>
	);
}
