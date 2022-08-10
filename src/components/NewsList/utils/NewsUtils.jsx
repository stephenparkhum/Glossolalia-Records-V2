import React from "react";
import { PortableText } from "@portabletext/react";

const components = {
	// types: {
	// 	image: ({value}) => <img src={value.imageUrl} />,
	// 	callToAction: ({value, isInline}) =>
	// 		isInline ? (
	// 			<a href={value.url}>{value.text}</a>
	// 		) : (
	// 			<div className="callToAction">{value.text}</div>
	// 		),
	// },
	marks: {
		link: ({ children, value }) => {
			return (
				<a href={value.href} target="_blank" rel="noreferrer noopener">
					<strong>{children}</strong>
				</a>
			);
		},
	},
};

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
	return <PortableText value={content} components={components} />;
};
