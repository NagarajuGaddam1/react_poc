import React from "react";
import { connect } from "react-redux";
const mapStateToProps = state => {
  return { books: state.rootReducer.books };
};
const ConnectedList = ({ books }) => (
  <ul className="list-group list-group-flush">
    {books.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.name}
      </li>
    ))}
  </ul>
);
const BooksList = connect(mapStateToProps)(ConnectedList);
export default BooksList;