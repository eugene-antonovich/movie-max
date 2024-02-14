import FilmMainCard from "../../components/cards/film-main-card/film-main-card.component";
import { useSelector } from "react-redux";

const ViewCard = () => {

  const modalCard = useSelector((state:any) => state.post);

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
    name,
  } = modalCard

  
  return (
    <div className="container">
      <FilmMainCard
        name={name ? name : '' }
        id={id? id : ''}
        year={year ? year : ''}
        genre={genres ? genres.slice(0, 3) : []}
        type={type ? type : ''}
        country={countries ? countries.slice(0, 3) : []}
        ageRating={ageRating ? ageRating : ''}
        imdb={rating ? rating.imdb : ''}
        kp={rating ? rating.kp : ''}
        image={poster ? poster.url : ''}
        shortDescription={shortDescription ? shortDescription : ''}
        description={description ? description : ' '}
        persons={persons ? persons.slice(0, 9) : []}
        trailer={videos ? videos.trailers[0]?.url : ''}
      />
    </div>
  );
};
export default ViewCard;
