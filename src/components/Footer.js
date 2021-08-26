import React from 'react';

export const Footer = () => {
	return (
		<div
			className="alert alert-secondary text-center container-center"
			style={{ position: 'absolute', top: '86.5vh', width: '100%' }}
			role="alert"
		>
			Check out my portfolio{' '}
			<a target="_blank" href="https://karthikraju.netlify.app/" className="alert-link" rel="noreferrer">
				karthikraju
			</a>
			<div className="text-center">Internet presence</div>
			<div>
				<a
					style={{ textDecoration: 'none' }}
					className="text-center"
					target="_blank"
					href="https://twitter.com/karthikraju391"
					rel="noreferrer"
				>
					Twitter
				</a>
				<a
					style={{ textDecoration: 'none' }}
					className="px-3"
					href="https://github.com/KarthikRaju391"
					target="_blank"
					rel="noreferrer"
				>
					Github
				</a>
				<a
					style={{ textDecoration: 'none' }}
					className="px-3"
					href="https://www.linkedin.com/in/karthik-s-raju/"
					target="_blank"
					rel="noreferrer"
				>
					LinkedIn
				</a>
			</div>
		</div>
	);
};
