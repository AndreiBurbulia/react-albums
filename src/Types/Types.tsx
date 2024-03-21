// Definisci l'interfaccia per il tipo di dato dell'utente completo
export interface UserComplete {
	id: number;
	name: string;
	username: string;
	email: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
		geo: {
			lat: string;
			lng: string;
		};
	};
	phone: string;
	website: string;
	company: {
		name: string;
		catchPhrase: string;
		bs: string;
	};
}

// Definisci l'interfaccia per il tipo di dato dell'album
export interface Album {
	userId: number;
	id: number;
	title: string;
	user: UserComplete | undefined; // user potrebbe essere undefined, quindi aggiungi il "?"
}
