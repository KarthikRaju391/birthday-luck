import React, { useState } from 'react';

export const Content = (props) => {
	const [ day, setDay ] = useState('');
	const [ luckyNum, setLuckyNum ] = useState('');

	const submit = (e) => {
		e.preventDefault();
		if (!day || !luckyNum) {
			alert('Date or lucky number cannot be empty');
		} else {
			props.IsLucky(day, luckyNum);
		}
	};

	return (
		<div className="container">
			<h3 className="m-5">Know your luck!</h3>
			<form onSubmit={submit}>
				<div className="mb-3">
					<label htmlFor="date" className="form-label">
						Enter your birthday
					</label>
					<input
						type="text"
						className="form-control"
						placeholder="dd-mm-yyyy"
						id="user-birthday"
						onChange={(e) => {
							setDay(e.target.value);
						}}
						value={day}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="number" className="form-label">
						Enter your lucky number
					</label>
					<input
						type="text"
						className="form-control"
						id="user-lucky-number"
						onChange={(e) => {
							setLuckyNum(e.target.value);
						}}
						value={luckyNum}
					/>
				</div>
				<button type="submit" className="btn btn-primary ">
					Am I lucky?
				</button>
			</form>
		</div>
	);
};
