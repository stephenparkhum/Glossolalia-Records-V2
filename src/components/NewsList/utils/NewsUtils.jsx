import React from "react";

export const displayIframes = (
	{ iframeSrc, releaseTitle, bandcampUrl },
	iframeStyles,
) => {
	return iframeSrc.map((embed, i) => {
		return (
			<p key={`${embed}-${i}`} className="listen-now-individual">
				LISTEN: <br />
				<iframe
					style={iframeStyles}
					src={`"${embed}"`}
					seamless
					title={releaseTitle}
				>
					<a href={bandcampUrl}>{releaseTitle}</a>
				</iframe>
			</p>
		);
	});
};

export const displayNewsContent = content => {
	// NEWS CONTENT
	// loop through: newsContent[0].children
	for (let i = 0; i < content[0].children; i++) {
		console.log(content[0].children[i]);
	}

	const currentElement = content[0].children.map(news => {
		return React.createElement(
			news.marks[0] ? news.marks[0] : news._type,
			null,
			news.text,
		);
	});

	return <>{currentElement}</>;
};
