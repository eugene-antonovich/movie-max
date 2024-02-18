import card from "./film-card.module.scss";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getFilmById, openModalCard } from "../../../actions/action";
import { useDispatch, useSelector } from "react-redux";
import { posterMissing } from "../../../helpers/get-posts";
import { useContext, useState } from "react";
import { ThemeContext } from "../../../App";
import { FilmCardProps, initialStateTypes } from "../../../interface/interface";



export let favorite = localStorage.getItem("favorite")
  ? JSON.parse(localStorage.getItem("favorite")!)
  : [];

const FilmCard = (props: FilmCardProps) => {
  const { theme } = useContext(ThemeContext);

  const [isFavorite, setIsFavorite] = useState(
    favorite.some((obj: FilmCardProps) => obj.id === props.id) ? true : false
  );

  const rating =
    props.rating < 6.5
      ? card.cardRatingLow
      : props.rating >= 8
      ? card.cardRatingTop
      : card.cardRatingMiddle;

  const dispatch = useDispatch();

  const getId = async () => {
    dispatch(getFilmById(props.id.toString()) as any);
    dispatch(openModalCard());
  };

  const adToFavorite = (event: any) => {
    event.stopPropagation();
    if (favorite.some((obj: FilmCardProps) => obj.id === props.id)) {
      favorite = favorite.filter((item: FilmCardProps) => item.id !== props.id);
      setIsFavorite((isFavorite: boolean) => !isFavorite);
    } else {
      favorite.push({
        id: props.id,
        image: props.image,
        rating: props.rating,
        name: props.name,
        genres: props.genres,
      });
      setIsFavorite((isFavorite: boolean) => !isFavorite);
    }
    localStorage.setItem("favorite", JSON.stringify(favorite));
  };

  const isAuthorized = useSelector((state: initialStateTypes) => state.authorization);

  return (
    <div
      className={theme ? card.cardWrapLight : card.cardWrap}
      id={props.id}
      onClick={getId}
    >
      <div className={card.cardImageWrap}>
        <img src={props.image ? props.image : posterMissing} alt="#" />
        <div className={card.cardRatingWrap}>
          <span className={rating}>{props.rating}</span>
        </div>
        {isAuthorized && (
          <div
            className={
              !isFavorite ? card.cardFavorite : card.cardFavoriteActive
            }
            onClick={adToFavorite}
          >
            <FontAwesomeIcon icon={faStar} />
          </div>
        )}
      </div>
      <div className={card.cardDescriptionWrap}>
        <div className={theme ? card.cardTitleLight : card.cardTitle}>
          <h3>{props.name}</h3>
        </div>
        <ul className={theme ? card.cardGenreLight : card.cardGenre}>
          {props.genres.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilmCard;
