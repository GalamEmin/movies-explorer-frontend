import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies({ onSearchMovies, movies }) {
  return (
    <section className="movies">
      <Header />
      <SearchForm onSearchMovies={onSearchMovies} />
      <MoviesCardList cards={movies} isSavedFilms={false} />
      <Footer />
    </section>
  );
}

export default Movies;
