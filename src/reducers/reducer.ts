
import { getPosts } from "../helpers/get-posts";

const initialState = {
  OpenModal: false,
  post: null,
  morePosts: null,
};

export const reducer = (state: any, action: Record<string, string>) => {
  switch (action.type) {
    case "OPEN_MODAL_CARD":
      return (state = true);
    case "CLOSE_MODAL_CARD":
      return (state = false);
    case "SHOW_POST/fulfilled":
      return { ...state, post: action.payload };
    default:
      return state;
  }
};
