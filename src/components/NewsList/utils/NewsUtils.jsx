import React from "react";

export const displayIframes = (
	{ iframeSrc, releaseTitle, bandcampUrl },
	iframeStyles,
) => {
	return iframeSrc.map((embed, i) => {
		return (
			<div key={`${embed}-${i}`} className="listen-now-individual">
				LISTEN: <br />
				<iframe style={iframeStyles} src={embed} seamless title={releaseTitle}>
					<a href={bandcampUrl}>{releaseTitle}</a>
				</iframe>
			</div>
		);
	});
};

export const displayNewsContent = content => {
	const currentElement = content[0].children.map(news => {
		return React.createElement(
			news.marks[0] ? news.marks[0] : news._type,
			null,
			news.text,
		);
	});

	return <>{currentElement}</>;
};
