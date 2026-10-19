import { useEffect, useState } from "react";

import Navbar from "../components/layout/Navbar";
import Hero from "../components/layout/Hero";
import HeroSection from "../components/layout/HeroSection";
import Footer from "../components/layout/Footer";

import { getInitialFilmDatas } from "../data/initialDatas";

export default function App() {
  const [filmDatas, setFilmDatas] = useState([]);

  useEffect(() => {
    let ignore = false;

    async function load() {
      try {
        const data = await getInitialFilmDatas();
        if (!ignore) setFilmDatas(data);
      } catch (err) {
        if (!ignore) console.log(err);
      }
    }

    load();

    return () => {
      ignore = true;
    }
  }, []);

  const continueWatchingFilmDatas = filmDatas.filter(data => data.fyp.includes('continue-watching'));
  const topRatingFilmDatas = filmDatas.filter(data => data.fyp.includes('top-rating'));
  const filmTrendingFilmDatas = filmDatas.filter(data => data.fyp.includes('film-trending'));
  const newReleaseFilmDatas = filmDatas.filter(data => data.fyp.includes('new-release'));

  return (
    <>
      <Navbar />
      <Hero />
      <HeroSection title='Melanjutkan Tonton Film' mode='card' filmDatas={continueWatchingFilmDatas} />
      <HeroSection title='Top Rating Film dan Series Hari ini' mode='poster' filmDatas={topRatingFilmDatas} />
      <HeroSection title='Film Trending' mode='poster' filmDatas={filmTrendingFilmDatas} />
      <HeroSection title='Rilis Baru' mode='poster' filmDatas={newReleaseFilmDatas} />
      <Footer />
    </>
  );
}
