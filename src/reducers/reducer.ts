import { initialStateTypes } from "../interface/interface";

const initialState: initialStateTypes = {
  registration: false,
  authorization: JSON.parse(localStorage.getItem("authorization")!),
  openModal: false,
  post: [],
  posts: [],
  searchResult: null,
  searchResultIsActive: false,
  isFaorite: false,
};

export const reducer = (
  state = initialState,
  action: Record<string, string>
) => {
  switch (action.type) {
    case "REGISTRATION":
      return { ...state, registration: true };
    case "NOT_REGISTRATION":
      return { ...state, registration: false };
    case "AUTHORIZATION":
      return { ...state, authorization: true };
    case "NOT_AUTHORIZATION":
      return { ...state, authorization: false };
    case "OPEN_MODAL_CARD":
      return { ...state, openModal: true };
    case "CLOSE_MODAL_CARD":
      return { ...state, openModal: false };
    case "SHOW_FILM_BY_ID":
      return { ...state, post: action.payload };
    case "SHOW_MORE":
      return { ...state, posts: action.payload };
    case "SHOW_MOVIES_BY_SEARCH":
      return { ...state, searchResult: action.payload };
    case "SHOW_MOVIES_BY_SEARCH_IS_ACTIVE":
      return { ...state, searchResultIsActive: true };
    case "SHOW_MOVIES_BY_SEARCH_IS_NOT_ACTIVE":
      return { ...state, searchResultIsActive: false };
    default:
      return state;
  }
};
