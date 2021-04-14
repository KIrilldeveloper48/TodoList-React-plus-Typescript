import React from 'react';
import { useHistory } from 'react-router';
import { Routes } from './../../const';

const AboutPage: React.FC = () => {
  const history = useHistory()
  return (
    <>
      <h1>Страница информации</h1>
      <div className="badges">
        <img src="https://img.shields.io/badge/made%20by-KIrilldeveloper48-blue.svg" alt="badge" />
        <img src="https://img.shields.io/badge/react-16.14.0-green.svg" alt="badge" />
        <img src="https://img.shields.io/badge/redux-7.2.2-green.svg" alt="badge" />
        <img src="https://img.shields.io/github/languages/top/KIrilldeveloper48/Six-cities-SPA-React.svg" alt="badge" />
      </div>

      <p>Простой Todo List для закрепления навыков React в связке с Typescript</p>
      <button className="btn" onClick={() => history.push(Routes.MAIN)}>Обратно к списку дел</button>
    </>
  )
}

export default AboutPage