import React, {useState} from 'react';

const SearchBar: React.FC = () => {
	const [searchTerm, setSearchTerm] = useState('');

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	return (
		<div>
			<input
				type="text"
				placeholder="Search in Drive"
				value={searchTerm}
				onChange={handleSearch}
			/>
		</div>
	);
};

export default SearchBar;