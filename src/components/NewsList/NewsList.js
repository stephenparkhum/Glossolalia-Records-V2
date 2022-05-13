import PropTypes from "prop-types";
import React from "react";
import "./NewsList.css";
import NewsListItem from "../NewsList/NewsListItem/NewsListItem";

const NewsList = ({ title }) => {
	return (
		<>
			<div className="Main-News">
				<h1>{title}</h1>
				<NewsListItem />
			</div>
		</>
	);
};

NewsList.propTypes = {
	title: PropTypes.string,
};

export default NewsList;
