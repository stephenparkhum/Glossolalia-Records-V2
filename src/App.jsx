import React, { useCallback, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

// Components
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
// import ArtistIndividual from "./components/ArtistIndividual/ArtistIndividual";
import LeftSocial from "./components/LeftSocial/LeftSocial";
import ButtonMobileMenu from "./components/BottomMobileMenu/BottomMobileMenu";
// import { artistsRef } from "./firebaseSetup";

let PROJECT_ID = "wbp0yjss";
let DATASET = "production";

const App = () => {
	const [artists, setArtists] = useState([]);
	const [albums, setAlbums] = useState([]);
	const [news, setNews] = useState([]);
	// const [siteData, setSiteData] = useState([]);

	const getQueryType = type => encodeURIComponent(`*[_type == '${type}']`);
	const generateURL = useCallback(type => {
		return `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${getQueryType(
			type,
		)}`;
	}, []);

	const getNews = () => {
		return fetch(generateURL("news"))
			.then(res => res.json())
			.then(({ result }) => {
				if (result.length > 0) {
					return result;
				}
			})
			.then(data => {
				setNews(data);
			})
			.catch(err => console.error(err));
	};

	const newsList = React.useMemo(() => {
		getNews();
		return news;
	}, [news]);

	useEffect(() => {
		fetch(generateURL("band"))
			.then(res => res.json())
			.then(({ result }) => {
				if (result.length > 0) {
					return result;
				}
			})
			.then(artists => {
				setArtists(artists);
			})
			.catch(err => console.error(err));

		fetch(generateURL("album"))
			.then(res => res.json())
			.then(({ result }) => {
				if (result.length > 0) {
					return result;
				}
			})
			.then(albums => {
				setAlbums(albums);
			})
			.catch(err => console.error(err));

		getNews();
	}, [generateURL]);

	return (
		<Router>
			<div className="App">
				<Header />
				<Switch>
					<Route exact path="/">
						<Main title="NEWS" news={newsList} />
					</Route>
					<Route exact path="/artists">
						<Main artists={artists} albums={albums} title="ARTISTS" />
					</Route>
					{/* <Route
						path="/artists/:artist"
						component={props => {
							return <ArtistIndividual name={props.match.params.artist} />;
						}}
					/> */}
					<Route path="/contact">
						<Main title="CONTACT" />
					</Route>
				</Switch>
			</div>
			<Route path="/">
				<LeftSocial />
				<ButtonMobileMenu />
			</Route>
		</Router>
	);
};

export default App;
