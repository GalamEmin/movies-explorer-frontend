import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

const movies = [
  { _id: 1, image: { url: 'uploads/stones_in_exile_b2f1b8f4b7.jpeg' }, nameRU: '33 слова о дизайне', time: '1ч 42м', saved: true },
  { _id: 2, image: { url: 'uploads/stones_in_exile_b2f1b8f4b7.jpeg' }, nameRU: '34 слова о дизайне', time: '1ч 42м', saved: false },
  { _id: 3, image: { url: 'uploads/stones_in_exile_b2f1b8f4b7.jpeg' }, nameRU: '35 слов о дизайне', time: '1ч 42м', saved: false },
];

function SavedMovies() {
  return (
    <section className="movies">
      <Header />
      <SearchForm />
      <MoviesCardList cards={movies} isSavedFilms={true} />
      <Footer />
    </section>
  );
}

export default SavedMovies;
