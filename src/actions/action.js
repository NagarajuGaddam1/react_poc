export const addArticle = article => (
    { type: "ADD_ARTICLE", payload: article }
);
export const addBook = book => (
    { type: "ADD_BOOKS", payload: book }
);
export const updateUsers = items => (
    { type: "UPDATE_USERS", payload: items }
);
export const GET_API_DATA="GET_API_DATA";
export const RECEIVE_API_DATA="RECEIVE_API_DATA";
export const getUserData =() => (
    { type: "GET_API_DATA" }
);
export const reciveUserData = data => (
    { type: "RECEIVE_API_DATA", data }
);