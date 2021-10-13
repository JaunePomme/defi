import React from "react";
import { useHistory, useLocation } from "react-router";
import styled from "styled-components";

const Button = styled.button`
	background: transparent;
	border-radius: 3px;
	border: 2px solid palevioletred;
	color: palevioletred;
	margin: 0 1em;
	padding: 0.25em 1em;
	font-size: 20px;
	:hover {
		background-color: #a5d6a7;
	}
`;

const Ul = styled.ul`
	font-size: 20px;
	background: transparent;
	color: palevioletred;
`;

export default function NewPage() {
	const location = useLocation();
	const history = useHistory();
	const { firstName, lastName, mail, phone } = location.state;

	const handleClick = () => {
		history.push("/");
	};
	return (
		<div>
			<Ul>
				<li>First name: {firstName}</li>
				<li>Last name: {lastName}</li>
				<li>Mail: {mail}</li>
				<li>Phone: {phone}</li>
			</Ul>
			<Button onClick={handleClick}>Reset form</Button>
		</div>
	);
}
