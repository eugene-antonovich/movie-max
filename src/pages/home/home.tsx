import home from "./home.module.scss";
import FilmCard from "../../components/cards/film-card/film-card.component";
import ViewCard from "../view-card/view-card";
import { useEffect, useRef, useState } from "react";
import { getPosts } from "../../helpers/get-posts";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { cardDataSlice } from "../../App";

interface dataInterface {
  id: number;
  name: string;
  imdb: number;
  poster: string;
  genres: string;
  genres2: string;
  genres3: string;
}

const Home = () => {
  const dispatch = useDispatch();

  const [dataArray, setDataArray] = useState<dataInterface[]>([]);

  useEffect(() => {
    (async () => {
      const data = await getPosts(
        `https://api.kinopoisk.dev/v1.4/movie?page=1&limit=${20}`
      );
      const listData = data.docs.map((item: any) => ({
        id: item.id,
        name: item.name,
        imdb: item.rating.imdb,
        poster: item.poster.url,
        genres: item.genres[0].name,
        genres2: item.genres[1]?.name,
        genres3: item.genres[2]?.name,
      }));
      setDataArray(listData);
    })();
  }, []);

  const isModalOpen = useSelector((state: any) => state.cardData.isModalOpen);
  const dataIsFetched = useSelector(
    (state: any) => state.cardData.dataIsFetched
  );

  return (
    <div className="container">
      <div className={home.cardsWrap}>
        {dataArray.map((post: any) => (
          <FilmCard
            key={post.id}
            id={post.id}
            image={post.poster}
            rating={post.imdb}
            name={post.name}
            year={post.year}
            genres={[post.genres, post.genres2, post.genres3]}
          />
        ))}
      </div>
      {isModalOpen && dataIsFetched && <ViewCard />}
      <div className={home.showMoreButtonWrap}>
        <button className={home.showMoreButton}>
          Show more{" "}
          <span className={home.showMoreButtonIcon}>
            <FontAwesomeIcon icon={faSpinner} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Home;
