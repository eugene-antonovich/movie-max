import FilmMainCard from "../../components/cards/film-main-card/film-main-card.component";
import { useSelector } from "react-redux";

// interface selectedMovieDataType {
//   id: number;
//   year: number;
//   name: string;
//   genres: string[];
//   type: string;
//   countries: string;
//   ageRating: number;
//   rating: string;
//   poster: string;
//   shortDescription: string;
//   description: string;
//   persons: string[];
//   videos: [];
// }

const ViewCard = () => {

  const viewData = useSelector((state: any) => {
    console.log("state", state);
    return [state.cardData.post];
  });

  const {
    id,
    year,
    genres,
    type,
    countries,
    ageRating,
    rating,
    poster,
    shortDescription,
    description,
    persons,
    videos,
  } = viewData[0];

  return (
    <div className="container">
      <FilmMainCard
        id={id}
        year={year}
        genre={genres.slice(0, 3)}
        type={type}
        country={countries.slice(0, 3)}
        ageRating={ageRating}
        imdb={rating.imdb}
        kp={rating.kp}
        image={poster.url}
        shortDescription={shortDescription}
        description={description}
        persons={persons.slice(0, 9)}
        trailer={videos.trailers[0]?.url}
      />
    </div>
  );
};
export default ViewCard;
