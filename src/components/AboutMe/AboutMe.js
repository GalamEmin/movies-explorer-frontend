import React from 'react';
import photo from '../../images/myphoto.jpg';
import './AboutMe.css';

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__content">
          <h3 className="about-me__large-title">Галам</h3>
          <p className="about-me__info">Фронтенд-разработчик, 36 лет</p>
          <p className="about-me__description">
            Родился и живу в городе Караганда.
            Женат, есть сын. Окончил Карагандинский технический гсударственный университет по специальности Экономика и менеджмент
            Более 7 лет работал в сфере телекоммуникаций. С 2018 начал работу в сфере IT.
            В качестве проект-менеджера. Принял для себя решение изменить свою жизнь и самому начать программировать.
          </p>
          <a
            href="https://github.com/GalamEmin"
            className="about-me__link"
            target="_blank"
            rel="noreferrer">
            Github
          </a>
        </div>
        <img src={photo} alt="фото" className="about-me__photo" />
      </div>
    </section>
  );
}

export default AboutMe;
