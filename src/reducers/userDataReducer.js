
const initialState = {
};
const userDataReducer = (state = {}, {type,data}) => {
  switch (type) {
    case "RECEIVE_API_DATA":
    return  data;
    default:
      return state;
  }
};
export default userDataReducer;