import React from 'react';

export const Result = ({ IsLucky }) => {
	return <div className="container">{IsLucky ? 'You are lucky!' : 'You are not lucky!'}</div>;
};
