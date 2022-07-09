import PropTypes from "prop-types";
import React from "react";
import "./Main.css";
import { Switch } from "react-router-dom";
import MainContent from "../MainContent/MainContent";

const Main = ({ title, artists, albums }) => {
	return (
		<Switch>
			<MainContent albums={albums} artists={artists} title={title} />
		</Switch>
	);
};

Main.propTypes = {
	title: PropTypes.string,
	artists: PropTypes.array,
	albums: PropTypes.array,
};

export default Main;
