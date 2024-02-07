import card from "./film-card.module.scss";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { fetchUserById } from "../../../actions/action";
import { cardDataSlice } from "../../../App";

interface FilmCardProps {
  id: string;
  image: string;
  rating: number;
  name: string;
  genres: string[];
  year: number;
}

export const modalCardId: string[] = [];

const FilmCard = (props: FilmCardProps) => {

  const dispatch = useDispatch();

  const getId = () => {
    dispatch(fetchUserById(props.id) as any);
    dispatch(cardDataSlice.actions.openModalCard())
  };

const addToFavorite = (event:any ) => {
    event.stopPropagation()
    localStorage.setItem('favorite', props.id)
  }

  return (
    <div className={card.cardWrap} id={props.id} onClick={getId}>
      <div className={card.cardImageWrap}>
        <img src={props.image} alt="#" />
        <div className={card.cardRatingWrap}>
          <span className={card.cardRating}>{props.rating}</span>
        </div>
        <div className={card.cardFavorite} onClick={addToFavorite}>
          <FontAwesomeIcon icon={faStar} />
        </div>
      </div>
      <div className={card.cardDescriptionWrap}>
        <div className={card.cardTitle}>
          <h3>{props.name}</h3>
        </div>
        <ul className={card.cardGenre}>
          {props.genres.map((item: string, index : number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilmCard;
