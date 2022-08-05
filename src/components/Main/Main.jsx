import PropTypes from "prop-types";
import React from "react";
import "./Main.css";
import { Switch } from "react-router-dom";
import MainContent from "../MainContent/MainContent";

const Main = ({ title, artists, albums, news }) => {
	return (
		<Switch>
			<MainContent
				albums={albums}
				news={news}
				artists={artists}
				title={title}
			/>
		</Switch>
	);
};

Main.propTypes = {
	title: PropTypes.string,
	artists: PropTypes.array,
	albums: PropTypes.array,
	news: PropTypes.array,
};

export default Main;
