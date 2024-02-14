import card from "./film-main-card.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModalCard } from "../../../actions/action";
import { posterMissing } from "../../../helpers/get-posts";
import {
  faChevronDown,
  faChevronUp,
  faCircleXmark,
  faVideo,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";


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
  name: string;
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
  const imdb =
    props.imdb < 6.5
      ? card.cardRatingLow
      : props.imdb >= 8
      ? card.cardRatingTop
      : card.cardRatingMiddle;

  const kp =
    props.kp < 6.5
      ? card.cardRatingLow
      : props.kp >= 8
      ? card.cardRatingTop
      : card.cardRatingMiddle;

  const dispatch = useDispatch();

  const [description, setDescription] = useState(false);

  const [trailer, setTrailer] = useState(false);

  const isModalOpen = useSelector((state: any) => state.openModal);

  const changeTrailer = () => {
    setTrailer(!trailer);
  };
  const openDescription = () => {
    setDescription(!description);
  };

  const closeModal = () => {
    dispatch(closeModalCard());
  };

  return (
    <div
      className={[isModalOpen ? card.cardWrap : card.display].join(" ")}
      id={props.id}
    >
      <div className={card.cardTopWrap}>
        <button className={card.cardButtonClose} onClick={closeModal}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>
        <div className={card.cardImageWrap}>
          <img src={props.image ? props.image : posterMissing} alt="#" />
          <div className={card.cardRatingWrap}>
            <span className={imdb}>
              IMDB <span>{props.imdb}</span>
            </span>
            <span className={kp}>
              KP <span>{props.kp}</span>
            </span>
          </div>
          <div className={card.cardTrailerWrap}>
              <button className={card.cardTrailer} onClick={changeTrailer}>
                Trailer <FontAwesomeIcon icon={faVideo} />
              </button>
            </div>
        </div>
        <div className={card.cardInfoWrap}>
          <span className={card.infoItem}>
            Movie premiere: <span className={card.infoData}>{props.year}</span>
          </span>
          <span className={card.infoItem}>
            Genre:{" "}
            {props.genre.map((item: any, index: number) => (
              <span className={card.infoData} key={index}>
                {item.name}
              </span>
            ))}
          </span>
          <span className={card.infoItem}>
            Type: <span className={card.infoData}>{props.type}</span>
          </span>
          <span className={card.infoItem}>
            Country:{" "}
            {props.country.map((item: any, index: number) => (
              <span className={card.infoData} key={index}>
                {item.name}
              </span>
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
              {props.persons.map((person: any, index: number) => (
                <div className={card.personWrap} key={index}>
                  <span className={card.personCard}>{person.name},</span>{" "}
                </div>
              ))}
            </div>
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
            <div className={card.descriptionHeaderWrap}>
              <div className={card.descriptionHeaderLeft}>
                <h4 className={card.descriptionTitle}>Description</h4>
                {description ? (
                  <button
                    className={card.cardButtonOpenDescription}
                    onClick={openDescription}
                  >
                    <FontAwesomeIcon icon={faChevronDown} />
                  </button>
                ) : (
                  <button
                    className={card.cardButtonCloseDescription}
                    onClick={openDescription}
                  >
                    <FontAwesomeIcon icon={faChevronUp} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={description ? card.cardBottomWrap : card.display}>
        <p className={card.cardDescription}>{props.description}</p>
      </div>
    </div>
  );
};

export default FilmMainCard;
