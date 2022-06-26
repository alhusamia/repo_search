import {
  GET_REPOS,
  ADD_REPO,
  DELETE_REPO,
  SET_LOADING,
  SET_PAGES,
  SET_TEXT,
  SHOW_SEARCH,
} from "../actions/actionTypes";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case GET_REPOS:
      return { ...state, repoList: payload };
    case ADD_REPO:
      return { ...state, choosenList: payload };
    case DELETE_REPO:
      return { ...state, choosenList: payload };
    case SET_LOADING:
      return { ...state, loading: payload };
    case SET_PAGES:
      return { ...state, pages: payload };
    case SET_TEXT:
      return { ...state, text: payload };
    case SHOW_SEARCH:
      return { ...state, showSearch: payload };
    default:
      return state;
  }
};

export default reducer;
