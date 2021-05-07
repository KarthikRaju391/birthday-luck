import './App.css';
import { IsLucky } from './lib/IsLucky';
import { Content } from './components/Content';
import { Header } from './components/Header';
import { useState } from 'react';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	const [ remainder, setRemainder ] = useState('');

	const findRemainder = (day, luckyNum) => {
		setRemainder(IsLucky(day, luckyNum));
	};

	const Result = (
		<div className="container mt-4">
			{remainder === 0 && <div className="alert alert-success">You are lucky!!</div>}
			{remainder > 0 && <div className="alert alert-warning">You are unlucky!</div>}
		</div>
	);

	return (
		<div className="App">
			<Router>
				<Header />
				<Switch>
					<Route
						exact
						path="/"
						render={() => {
							return (
								<div>
									<Content IsLucky={findRemainder} />
									{Result}
								</div>
							);
						}}
					/>
					<Route exact path="/about">
						<About />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
