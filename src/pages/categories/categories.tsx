import { useEffect, useState } from "react";
import FilmCard from "../../components/cards/film-card/film-card.component";
import card from "./categories.module.scss";
import { useDispatch, useSelector } from "react-redux";
import ViewCard from "../view-card/view-card";
import {
  comedyLink,
  actionMovieLink,
  horrorLink,
  dramaLink,
  getMovies,
} from "../../helpers/get-posts";
import { initialStateTypes } from "../../interface/interface";

const Categories = () => {
  const [comedy, setComedy] = useState([]);
  const [actionMovie, setActionMovie] = useState([]);
  const [horror, setHorror] = useState([]);
  const [drama, setDrama] = useState([]);

  const isModalOpen = useSelector((state: initialStateTypes) => state.openModal);

  useEffect(() => {
    getMovies(comedyLink, setComedy);
    getMovies(actionMovieLink, setActionMovie);
    getMovies(horrorLink, setHorror);
    getMovies(dramaLink, setDrama);
  }, []);

  return (
    <div className="container">
      {isModalOpen && <ViewCard />}
      <div className={card.categoryWrap}>
        <h3 className={card.categoryTitle}>Комедии:</h3>
        <div className={card.cardsWrap}>
          {comedy.map((item: any) => (
            <FilmCard
              key={item.id}
              id={item.id}
              image={item.poster}
              rating={item.imdb}
              name={item.name}
              genres={[item.genres, item.genres2, item.genres3]}
            />
          ))}
        </div>
      </div>
      <div className={card.categoryWrap}>
        <h3 className={card.categoryTitle}>Боевики:</h3>
        <div className={card.cardsWrap}>
          {actionMovie.map((item: any) => (
            <FilmCard
              key={item.id}
              id={item.id}
              image={item.poster}
              rating={item.imdb}
              name={item.name}
              genres={[item.genres, item.genres2, item.genres3]}
            />
          ))}
        </div>
      </div>
      <div className={card.categoryWrap}>
        <h3 className={card.categoryTitle}>Ужасы:</h3>
        <div className={card.cardsWrap}>
          {horror.map((item: any) => (
            <FilmCard
              key={item.id}
              id={item.id}
              image={item.poster}
              rating={item.imdb}
              name={item.name}
              genres={[item.genres, item.genres2, item.genres3]}
            />
          ))}
        </div>
      </div>
      <div className={card.categoryWrap}>
        <h3 className={card.categoryTitle}>Драммы:</h3>
        <div className={card.cardsWrap}>
          {drama.map((item: any) => (
            <FilmCard
              key={item.id}
              id={item.id}
              image={item.poster}
              rating={item.imdb}
              name={item.name}
              genres={[item.genres, item.genres2, item.genres3]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
