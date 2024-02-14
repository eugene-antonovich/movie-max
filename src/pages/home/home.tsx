import home from "./home.module.scss";
import FilmCard from "../../components/cards/film-card/film-card.component";
import ViewCard from "../view-card/view-card";
import SearchResult from "../search-result/search.result";
import { useEffect, useState } from "react";
import { getMovies, getPosts, movie } from "../../helpers/get-posts";
import { useDispatch, useSelector } from "react-redux";
import { addMoreFilms } from "../../actions/action";

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

  const isModalOpen = useSelector((state: any) => state.openModal);

  const posts = useSelector((state: any) => state.posts.docs);

  useEffect(() => {
    getMovies(movie, setDataArray);
    handleButtonClick();
  }, []);
  
  const handleButtonClick = async () => {
    let num = 20;
    if (posts) {
      num = posts.length > 0 ? posts.length + 10 : 20;
    }
    dispatch(addMoreFilms(num) as any);
    setDataArray(
      posts
        ? posts.map((item: any) => ({
            id: item ? item.id : "",
            name: item ? item.name : "",
            imdb: item ? item.rating.imdb : "",
            poster: item ? item.poster.url : "",
            genres: item ? item.genres[0].name : "",
            genres2: item ? item.genres[1]?.name : "",
            genres3: item ? item.genres[2]?.name : "",
          }))
        : null
    );
  };

  const searchResultIsActive = useSelector(
    (state: any) => state.searchResultIsActive
  );
  return (
    <div className="container">
      <div className={home.cardsWrap}>
        {searchResultIsActive
          ? []
          : dataArray &&
            dataArray.map((post: any) => (
              <FilmCard
                key={post.id}
                id={post.id}
                image={post.poster}
                rating={post.imdb}
                name={post.name}
                genres={[post.genres, post.genres2, post.genres3]}
              />
            ))}
      </div>
      {isModalOpen && <ViewCard />}
      {searchResultIsActive && <SearchResult />}
      <div className={home.showMoreButtonWrap}>
        {!searchResultIsActive && (
          <button className={home.showMoreButton} onClick={handleButtonClick}>
            Show more
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
