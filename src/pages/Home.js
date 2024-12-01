import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Layout>
      <div className='home'>
        <div className='container'>
          <h1>ОБУЧИСЬ ПРОФЕССИИ МЕЧТЫ</h1>
          <p>Открой дверь в мир IT: записывайся на курс и освой профессию мечты!</p>
        </div>
      </div>
      <div className='start'>
        <h1 className='button'><Link to="/materials">Начать Обучение!</Link></h1>
      </div>
    </Layout>
  );
}

export default Home;
