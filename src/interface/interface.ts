export interface dataInterface {
  id: string;
  name: string;
  rating: {
    imdb: number;
    kp: number;
  };
  poster: { url: string };
  genres: { name: string }[];
}

export interface FilmCardProps {
  id: string;
  image: string;
  rating: number;
  name: string;
  genres: string[];
}

export interface filmCardInterface {
  id: string;
  name?: string;
  rating: {
    imdb?: number;
    kp?: number;
  };
  poster?: string;
  genres?: string[];
}

export interface initialStateTypes {
  registration: boolean;
  authorization: boolean;
  openModal: boolean;
  post: string | null | [];
  posts: string | null | [];
  searchResult: string | null | [];
  searchResultIsActive: boolean;
  isFaorite: boolean;
}

export interface FilmMainCardProps {
  name: string;
  id?: string;
  year: string;
  type?: string;
  ageRating?: number;
  imdb: number;
  kp: number;
  image: string;
  shortDescription?: string;
  description?: string;
  trailer?: string;
  genre: string[];
  country: string[];
  persons: string[];
}

export interface MenuItemProps {
  title: string;
  icon: React.ReactNode;
  isActive: boolean;
}

export interface FormElementProps {
    id?: string;
    placeholder: string;
    type: string;
  }

 export interface ItemInterface {
    id: number;
    name: string;
    rating: {imdb: number};
    poster: {url: string};
    genres: {name: string}[];
  }