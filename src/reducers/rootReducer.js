
const initialState = {
    articles: [],
    books:[],
    result:[]
  };
  const rootReducer = (state = initialState, action, data) => {
    switch (action.type) {
      case "ADD_ARTICLE":
      return { ...state, articles: [...state.articles, action.payload] };
      case "ADD_BOOKS":
      return { ...state, books: [...state.books, action.payload] };
      default:
        return state;
    }
  };
  export default rootReducer;