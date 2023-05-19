import React from 'react';
import { Banner } from '../landingpage/banner/Banner.js';
import { PopularGame } from './poulargame/PopularGame.js';

export default function Home() {
  return (
    <div>
      <Banner />
      <PopularGame />
    </div>
  );
}