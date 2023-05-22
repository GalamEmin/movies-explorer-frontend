import React from 'react';
import './NotFound.css';
import { useHistory } from 'react-router-dom';

function NotFound() {
  const { goBack } = useHistory();

  return (
    <section className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__text">Страница не найдена</p>
      <span className="not-found__button" onClick={goBack}>
        Назад
      </span>
    </section>
  );
}

export default NotFound;
