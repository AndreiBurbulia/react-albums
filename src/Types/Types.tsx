import { ReactNode } from 'react';

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

export interface Album {
	userId: number;
	id: number;
	title: string;
	user: UserComplete | undefined; // user potrebbe essere undefined, quindi aggiungi il "?"
}

export interface CardProps {
	title: string;
	image: string;
}

export interface SearchProps {
	filterData: (searchTerm: string) => void;
}

export interface TableProps {
	combinedData: Album[];
	sortingData: (column: string, order: string) => void;
}

export interface LayoutProps {
	children: ReactNode;
}

export interface Photo {
	albumId: number;
	id: number;
	title: string;
	url: string;
	thumbnailUrl: string;
}