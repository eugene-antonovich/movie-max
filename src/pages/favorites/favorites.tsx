import card from "./favorites.module.scss";
import ViewCard from "../view-card/view-card";
import FilmCard from "../../components/cards/film-card/film-card.component";
import { useSelector } from "react-redux";
import { initialStateTypes } from "../../interface/interface";

const Favorites = () => {
    const favorite = localStorage.getItem("favorite")
    ? JSON.parse(localStorage.getItem("favorite")!)
    : [];

  const isModalOpen = useSelector((state: initialStateTypes) => state.openModal);

  const isAuthorized = useSelector((state: initialStateTypes) => state.authorization);

  return (
    <div className="container">
      {isAuthorized && (
        <>
          <h3 className={card.cardTitle}>Favorite</h3>
          <div className={card.cardsWrap}>
            {favorite.map((post: any) => (
              <FilmCard
                key={post.id}
                id={post.id}
                image={post.image}
                rating={post.rating}
                name={post.name}
                genres={[post?.genres[0], post?.genres[1], post?.genres[2]]}
              />
            ))}
          </div>
        </>
      )}
      {isModalOpen && <ViewCard />}
    </div>
  );
};

export default Favorites;
