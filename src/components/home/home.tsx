import React, { useEffect, useState } from 'react';
import DriveService from '../../service/driveService';

import './home.css';
import SearchBar from '../search/search';

interface HomeProps {
  token: string;
}
  
export const Home: React.FC<HomeProps> = ({token}) => {
	const [images, setImages] = useState<any[]>([]);
  
	useEffect(() => {
	  const fetchImages = async () => {
		const files = await DriveService.fetchFiles(token);
		const imageUrls = files.files.map((file: any) => `https://drive.google.com/uc?export=view&id=${file.id}`);
		setImages(imageUrls);
	  };
	  fetchImages();
	}, [token]);
  
	return (
	  <>
		<SearchBar></SearchBar>
	  </>
	);
  }
