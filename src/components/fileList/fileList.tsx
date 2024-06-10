import React from "react";

interface File {
	name: string;
	type: string;
	updated: string;
	preview_url: string;
};

export const FileItem: React.FC<File> = ({name, type, updated}) => {
	return (
		<div className="file-item">
			<div className="file-type">{type}</div>
			<div className="file-name">{name}</div>
			<div className="file-updated">{updated}</div>
			<button className="button-icon">
				<i className="fa-solid fa-ellipsis"></i>
			</button>
		</div>
	);
};
