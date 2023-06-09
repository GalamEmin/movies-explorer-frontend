import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import SearchError from '../SearchError/SearchError';
import { SHOW_MORE_DESKTOP, SHOW_MORE_TABLET, SHOW_MORE_MOBILE } from '../../utils/constants';
import { SHOW_MORE_DESKTOP_BREAKPOINT, SHOW_MORE_TABLET_BREAKPOINT, SHOW_MORE_MOBILE_BREAKPOINT } from '../../utils/constants';

function MoviesCardList({
  cards,
  isSavedFilms,
  isLoading,
  isReqErr,
  isNotFound,
  handleLikeClick,
  savedMovies,
  onCardDelete,
}) {
  const [shownMovies, setShownMovies] = useState(0);
  const { pathname } = useLocation();

  function shownCount() {
    const display = window.innerWidth;
    if (display > SHOW_MORE_DESKTOP_BREAKPOINT) {
      setShownMovies(16);
    } else if (display > SHOW_MORE_TABLET_BREAKPOINT) {
      setShownMovies(12);
    } else if (display > SHOW_MORE_MOBILE_BREAKPOINT) {
      setShownMovies(8);
    } else if (display < SHOW_MORE_MOBILE_BREAKPOINT) {
      setShownMovies(5);
    }
  }

  useEffect(() => {
    shownCount();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener('resize', shownCount);
    }, 500);

    return () => {
      window.removeEventListener('resize', shownCount)
    };
  });

  function showMore() {
    const display = window.innerWidth;
    if (display > SHOW_MORE_DESKTOP_BREAKPOINT) {
      setShownMovies(shownMovies + SHOW_MORE_DESKTOP);
    } else if (display > SHOW_MORE_TABLET_BREAKPOINT) {
      setShownMovies(shownMovies + SHOW_MORE_TABLET);
    } else if (display < SHOW_MORE_TABLET_BREAKPOINT) {
      setShownMovies(shownMovies + SHOW_MORE_MOBILE);
    }
  }

  function getSavedMovieCard(savedMovies, card) {
    return savedMovies.find((savedMovie) => savedMovie.movieId === card.id);
  }

  return (
    <section className="cards">
      {isLoading && <Preloader />}
      {isNotFound && !isLoading && <SearchError errorText={'Ничего не найдено'} />}
      {isReqErr && !isLoading && (
        <SearchError
          errorText={
            'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
          }
        />
      )}
      {!isLoading && !isReqErr && !isNotFound && (
        <>
          {pathname === '/saved-movies' ? (
            <>
              <ul className="cards__list">
                {cards.map((card) => (
                  <MoviesCard
                    key={isSavedFilms ? card._id : card.id}
                    saved={getSavedMovieCard(savedMovies, card)}
                    cards={cards}
                    card={card}
                    isSavedFilms={isSavedFilms}
                    handleLikeClick={handleLikeClick}
                    onCardDelete={onCardDelete}
                    savedMovies={savedMovies}
                  />
                ))}
              </ul>
              <div className="cards__button-container"/>
            </>
          ) : (
            <>
              <ul className="cards__list">
                {cards.slice(0, shownMovies).map((card) => (
                  <MoviesCard
                    key={isSavedFilms ? card._id : card.id}
                    saved={getSavedMovieCard(savedMovies, card)}
                    cards={cards}
                    card={card}
                    isSavedFilms={isSavedFilms}
                    handleLikeClick={handleLikeClick}
                    onCardDelete={onCardDelete}
                    savedMovies={savedMovies}
                  />
                ))}
              </ul>
              <div className="cards__button-container">
                {cards.length > shownMovies ? (
                  <button className="cards__button" onClick={showMore}>
                    Ещё
                  </button>
                ) : (
                  ''
                )}
              </div>
            </>
          )}
        </>
      )}
    </section>
  );
}

export default MoviesCardList;
