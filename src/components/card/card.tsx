import React from "react";

import "./card.scss";

export const PlaylistCard = ({ title, photo }) => {
	return (
		<div className="playlistCard">
			<figure className="playlistCard__poster">
				<img src={photo} alt="poster" />
			</figure>
			<div className="playlistCard__title">
				<p>{title}</p>
			</div>
		</div>
	);
};
