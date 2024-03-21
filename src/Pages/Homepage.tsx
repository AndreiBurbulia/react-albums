import React, { useState, useEffect } from "react";
import axios from "axios";
import { Album, UserComplete } from "../Types/Types";

function Homepage() {
	const [combinedData, setCombinedData] = useState<Album[]>([]);
	console.log("before");
	
	useEffect(() => {
		const fetchData = async () => {
			try {
				// Effettua la prima chiamata API per ottenere gli albums
				const albumsResponse = await axios.get<Album[]>(
					"https://jsonplaceholder.typicode.com/albums"
				);
				const albums = albumsResponse.data;

				// Effettua la seconda chiamata API per ottenere gli users
				const usersResponse = await axios.get<UserComplete[]>(
					"https://jsonplaceholder.typicode.com/users"
				);
				const users = usersResponse.data;

				// Combina i dati degli albums e degli users
				const combinedData = albums.map((album) => {
					const user = users.find((user) => user.id === album.userId);
					return {
						...album,
						user: user || undefined, // Assegna l'utente solo se esiste
					};
				});

				setCombinedData(combinedData);
			} catch (error) {
				console.error("Errore durante il recupero dei dati:", error);
			}
		};

		fetchData();
	}, []);

	console.log("combined data", combinedData);

	return (
		<div className="container mx-auto">
			<h1>Homepage</h1>
		</div>
	);
}

export default Homepage;
