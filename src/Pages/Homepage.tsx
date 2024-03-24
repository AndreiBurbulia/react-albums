import React, { useState, useEffect } from "react";
import axios from "axios";
import { Album, UserComplete } from "../Types/Types";
import Table from "../Components/Table";
import Search from "../Components/Search";

function Homepage() {
	const [combinedData, setCombinedData] = useState<Album[]>([]);

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

	const filterData = (searchTerm: string) => {
		const filteredData = combinedData.filter(item =>
			item.title.toLowerCase().includes(searchTerm.toLowerCase())
		);
		// Aggiorna lo stato dei dati filtrati
		setCombinedData(filteredData);
	};

	const sortingData = (column: string, order: string) => {
		console.log(column, order);
		//order by title
		if (column === "title") {
			const sortedData = combinedData.sort((a, b) => {
				if (order === "asc") {
					return a.title.localeCompare(b.title);
				} else {
					return b.title.localeCompare(a.title);
				}
			});
			setCombinedData(sortedData)
		} else if (column === "author"){ //order by author
			const sortedDataByAuthor = combinedData.sort((a, b) => {
				if (order === "asc") {
					return (a.user?.name || "").localeCompare(b.user?.name || "");
				} else {
					return (b.user?.name || "").localeCompare(a.user?.name || "");
				}
			});
			setCombinedData(sortedDataByAuthor);
		}
	}
		
		
	return (

		<div className="container mx-auto my-6">
			<Search filterData={filterData} />
			<Table combinedData={combinedData} sortingData={sortingData}/>
		</div>
	);
}

export default Homepage;
