import * as actionTypes from "./actionTypes";

export const getRepos = async (data, dispatch) => {
  const text = data?.text || "";
  const current = data?.current || 1;
  try {
    setLoading(true, dispatch);
    const response = await fetch(
      `https://api.github.com/search/repositories?q=${text}&page=${current}`
    );
    const resData = await response.json();

    setPages(Math.floor(resData.total_count / 30), dispatch);
    dispatch({
      type: actionTypes.GET_REPOS,
      payload: resData.items,
    });
    setLoading(false, dispatch);
  } catch (error) {
    dispatch({
      type: actionTypes.GET_REPOS,
      payload: [],
    });
    setLoading(false, dispatch);
  }
};

export const addRepo = (data, dispatch) => {
  dispatch({
    type: actionTypes.ADD_REPO,
    payload: data,
  });
};

export const deleteRepo = (data, dispatch) => {
  dispatch({
    type: actionTypes.DELETE_REPO,
    payload: data,
  });
};

export const setLoading = (data, dispatch) => {
  dispatch({
    type: actionTypes.SET_LOADING,
    payload: data,
  });
};

export const setPages = (data, dispatch) => {
  dispatch({
    type: actionTypes.SET_PAGES,
    payload: data,
  });
};

export const showSearch = (data, dispatch) => {
  dispatch({
    type: actionTypes.SHOW_SEARCH,
    payload: data,
  });
};

export const setText = (data, dispatch) => {
  dispatch({
    type: actionTypes.SET_TEXT,
    payload: data,
  });
};
