import card from "./film-main-card.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  faBookmark,
  faChevronDown,
  faChevronUp,
  faCircleXmark,
  faVideo,
  faXmark
} from "@fortawesome/free-solid-svg-icons";
import { cardDataSlice } from "../../../App";
import { useDispatch } from "react-redux";

interface PersonsType {
  id: number;
  photo: string;
  name: string;
  enName: string;
  description: string;
  profession: string;
  enProfession: string;
}
interface FilmMainCard {
  id?: string;
  year: string;
  genre?: string[];
  type?: string;
  country?: string[];
  ageRating?: number;
  imdb: number;
  kp: number;
  image: string;
  shortDescription?: string;
  description?: string;
  persons?: PersonsType[];
  trailer?: string;
}
const FilmMainCard = (props: any) => {
  const [description, setDescription] = useState(false);
  const [trailer, setTrailer] = useState(false);

  const changeTrailer = () => {
    setTrailer((trailer: boolean) => !trailer);
  };
  const openDescription = () => {
    setDescription(!description);
  };

  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(cardDataSlice.actions.closeModalCard());
  };

  return (
    <div className={card.cardWrap} id={props.id}>
      <div className={card.cardTopWrap}>
        <button className={card.cardButtonClose} onClick={closeModal}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>
        <div className={card.cardImageWrap}>
          <img src={props.image} alt="#" />
          <div className={card.cardRatingWrap}>
            <span className={card.cardRatingImdb}>
              IMDB <span>{props.imdb}</span>
            </span>
            <span className={card.cardRatingKp}>
              KP <span>{props.kp}</span>
            </span>
          </div>
        </div>
        <div className={card.cardInfoWrap}>
          <span className={card.infoItem}>
            Movie premiere: <span className={card.infoData}>{props.year}</span>
          </span>
          <span className={card.infoItem}>
            Genre:{" "}
            {props.genre.map((item: any) => (
              <span className={card.infoData}>{item.name}</span>
            ))}
          </span>
          <span className={card.infoItem}>
            Type: <span className={card.infoData}>{props.type}</span>
          </span>
          <span className={card.infoItem}>
            Country:{" "}
            {props.country.map((item: any) => (
              <span className={card.infoData}>{item.name}</span>
            ))}
          </span>
          <span className={card.infoItem}>
            Age rating:{" "}
            <span className={card.infoData}>{props.ageRating}+</span>
          </span>
          <div className={card.infoShortDescription}>
            <h4 className={card.shortDescriptionTitle}>Short description:</h4>
            <p>{props.shortDescription}</p>
            <h4 className={card.cardPersonTitle}>Cast:</h4>
            <div className={card.cardPersonsWrap}>
              {props.persons.map((person: any) => (
                <div className={card.personWrap}>
                  <span key={person} className={card.personCard}>
                    {person.name},
                  </span>{" "}
                  <div className={card.cardPersonImage}>
                    <img src={person.photo} alt="#" />
                  </div>
                </div>
              ))}
            </div>
            <div className={card.cardTrailerWrap}>
              <button className={card.cardTrailer} onClick={changeTrailer}>
                Trailer <FontAwesomeIcon icon={faVideo} />
              </button>
              {trailer && (
                <iframe
                  src={props.trailer}
                  className={card.cardTrailerWindow}
                ></iframe>
              )}
              {trailer && (
                <button
                  className={card.cardCloseTrailer}
                  onClick={changeTrailer}
                >
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              )}
            </div>
            <div className={card.descriptionHeaderWrap}>
              <div className={card.descriptionHeaderLeft}>
                <h4 className={card.descriptionTitle}>Description</h4>
                <button
                  className={card.cardButtonOpenDescription}
                  onClick={openDescription}
                >
                  {description ? (
                    <FontAwesomeIcon icon={faChevronUp} />
                  ) : (
                    <FontAwesomeIcon icon={faChevronDown} />
                  )}
                </button>
              </div>
              <div className={card.descriptionHeaderRight}>
                <FontAwesomeIcon icon={faBookmark} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={card.cardBottomWrap}>
        <p className={description ? card.cardDescription : card.display}>
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default FilmMainCard;
