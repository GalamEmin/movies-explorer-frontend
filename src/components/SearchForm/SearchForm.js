import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ onSearchMovies }) {
  return (
    <section className="search">
      <form className="search__form">
        <label className="search__label" htmlFor="search-input"/>
        <input
          className="search__input"
          id="search-input"
          type="text"
          placeholder="Фильм"
          required/>
        <button className="search__button" onClick={onSearchMovies} type="submit"/>
      </form>
      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;
