import card from "../home/home.module.scss";
import FilmCard from "../../components/cards/film-card/film-card.component";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ItemInterface, filmCardInterface } from "../../interface/interface";

const SearchResult = () => {
  const [datasArray, setDataArray] = useState([]);
  const moviesBySearch = useSelector((state: any) => state.searchResult?.docs);

  useEffect(() => {
    searchResult();
  }, [moviesBySearch]);


  const searchResult = async () => {
    setDataArray(
      moviesBySearch.map((item: ItemInterface) => ({
        id: item ? item.id : "",
        name: item ? item.name : "",
        imdb: item ? item.rating.imdb : "",
        poster: item ? item.poster?.url : "",
        genres: item ? item.genres[0]?.name : "",
        genres2: item ? item.genres[1]?.name : "",
        genres3: item ? item.genres[2]?.name : "",
      }))
    );
  };
  return (
    <>
    <div className={card.cardsWrap}>
      {datasArray.map((post: any) => (
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
    </>
  );
};

export default SearchResult;
