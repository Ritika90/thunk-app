import endpoint from "./endpoint";
import { doGet } from "providers/api";
export const actions = {
  GET: {
    LIST_POSTS: "LIST_GET_POSTS",
    POST_BY_ID: "POST_BY_GET_ID",
  },
  PUT: {
    LIST_POSTS: "LIST_PUT_POSTS",
    POST_BY_ID: "POST_BY_PUT_ID",
  },
};

export const putPosts = (res) => ({
  type: actions.PUT.LIST_POSTS,
  payload: res,
});

export const putPostById = (res) => ({
  type: actions.PUT.POST_BY_ID,
  payload: res,
});

export const getPosts = () => {
  return (dispatch) => {
    dispatch({ type: actions.GET.LIST_POSTS });
    return doGet({ url: endpoint.posts.list }).then(
      (response) => dispatch(putPosts(response)),
      (error) => console.log("An error occurred.", error)
    );
  };
};

export const getPostById = (id) => {
  return (dispatch) => {
    dispatch({ type: actions.GET.POST_BY_ID });
    return doGet({ url: `${endpoint.posts.list}/${id}` }).then(
      (response) => dispatch(putPostById(response)),
      (error) => console.log("An error occurred.", error)
    );
  };
};
