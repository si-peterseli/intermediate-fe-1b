const initialFilmDatas = [
  {
    title: 'Don\'t Look Up',
    rating: 4.5,
    cardImage: 'card/dont-look-up.webp',
    posterImage: 'poster/dont-look-up.webp',
    durationSeconds: 9180,
    genres: ['Misteri', 'Kriminal', 'Fantasi'],
    ageRating: '13+',
    fyp: ['continue-watching'],
    badge: null,
    progress: {
      episode: 'Episode 1',
      progressSeconds: 2754
    }
  },
  {
    title: 'Blue Lock',
    rating: 4.6,
    cardImage: 'card/blue-lock.webp',
    posterImage: 'poster/blue-lock.webp',
    posterImage: null,
    durationSeconds: 9180,
    genres: ['Misteri', 'Kriminal', 'Fantasi'],
    ageRating: '13+',
    fyp: ['continue-watching'],
    badge: null,
    progress: {
      episode: 'Episode 1',
      progressSeconds: 4590
    }
  },
  {
    title: 'The Batman',
    rating: 4.2,
    cardImage: 'card/the-batman.webp',
    posterImage: 'poster/the-batman.webp',
    durationSeconds: 9180,
    genres: ['Misteri', 'Kriminal', 'Fantasi'],
    ageRating: '13+',
    fyp: ['continue-watching'],
    badge: null,
    progress: {
      episode: 'Episode 1',
      progressSeconds: 2754
    }
  },
  {
    title: 'A Man Called Otto',
    rating: 4.4,
    cardImage: 'card/a-man-called-otto.webp',
    posterImage: 'poster/a-man-called-otto.webp',
    durationSeconds: 9180,
    genres: ['Misteri', 'Kriminal', 'Fantasi'],
    ageRating: '13+',
    fyp: ['continue-watching', 'film-trending'],
    badge: 'top-10',
    progress: {
      episode: 'Episode 1',
      progressSeconds: 4590
    }
  },
  {
    title: 'Suzune',
    rating: 4.5,
    cardImage: 'card/suzune.webp',
    posterImage: 'poster/suzune.webp',
    durationSeconds: 9180,
    genres: ['Misteri', 'Kriminal', 'Fantasi'],
    ageRating: '13+',
    fyp: ['top-rating'],
    badge: 'new-episode',
    progress: {
      episode: 'Episode 1',
      progressSeconds: 2754
    }
  },
  {
    title: 'Jurrasic World',
    rating: 4.5,
    cardImage: 'card/jurrasic-world.webp',
    posterImage: 'poster/jurrasic-world.webp',
    durationSeconds: 9180,
    genres: ['Misteri', 'Kriminal', 'Fantasi'],
    ageRating: '13+',
    fyp: ['top-rating'],
    badge: null,
    progress: {
      episode: 'Episode 1',
      progressSeconds: 2754
    }
  },
  {
    title: 'Sonic 2',
    rating: 4.5,
    cardImage: 'card/sonic-2.webp',
    posterImage: 'poster/sonic-2.webp',
    durationSeconds: 9180,
    genres: ['Misteri', 'Kriminal', 'Fantasi'],
    ageRating: '13+',
    fyp: ['top-rating'],
    badge: null,
    progress: {
      episode: 'Episode 1',
      progressSeconds: 2754
    }
  },
  {
    title: 'All Of Us Are Dead',
    rating: 4.5,
    cardImage: 'card/all-of-us-are-dead.webp',
    posterImage: 'poster/all-of-us-are-dead.webp',
    durationSeconds: 9180,
    genres: ['Misteri', 'Kriminal', 'Fantasi'],
    ageRating: '13+',
    fyp: ['top-rating', 'new-release'],
    badge: 'new-episode',
    progress: {
      episode: 'Episode 1',
      progressSeconds: 2754
    }
  },
  {
    title: 'Big Hero 6',
    rating: 4.5,
    cardImage: 'card/big-hero-6.webp',
    posterImage: 'poster/big-hero-6.webp',
    durationSeconds: 9180,
    genres: ['Misteri', 'Kriminal', 'Fantasi'],
    ageRating: '13+',
    fyp: ['top-rating', 'new-release'],
    badge: null,
    progress: {
      episode: 'Episode 1',
      progressSeconds: 2754
    }
  },
  {
    title: 'The Tomorrow War',
    rating: 4.5,
    cardImage: 'card/the-tomorrow-war.webp',
    posterImage: 'poster/the-tomorrow-war.webp',
    durationSeconds: 9180,
    genres: ['Misteri', 'Kriminal', 'Fantasi'],
    ageRating: '13+',
    fyp: ['film-trending'],
    badge: 'top-10',
    progress: {
      episode: 'Episode 1',
      progressSeconds: 2754
    }
  },
  {
    title: 'Quantumania',
    rating: 4.5,
    cardImage: 'card/quantumania.webp',
    posterImage: 'poster/quantumania.webp',
    durationSeconds: 9180,
    genres: ['Misteri', 'Kriminal', 'Fantasi'],
    ageRating: '13+',
    fyp: ['film-trending'],
    badge: 'top-10',
    progress: {
      episode: 'Episode 1',
      progressSeconds: 2754
    }
  },
  {
    title: 'Guardian Of The Galaxy',
    rating: 4.5,
    cardImage: 'card/guardian-of-the-galaxy.webp',
    posterImage: 'poster/guardian-of-the-galaxy.webp',
    durationSeconds: 9180,
    genres: ['Misteri', 'Kriminal', 'Fantasi'],
    ageRating: '13+',
    fyp: ['film-trending'],
    badge: 'top-10',
    progress: {
      episode: 'Episode 1',
      progressSeconds: 2754
    }
  },
  {
    title: 'The Little Mermaid',
    rating: 4.5,
    cardImage: 'card/the-little-mermaid.webp',
    posterImage: 'poster/the-little-mermaid.webp',
    durationSeconds: 9180,
    genres: ['Misteri', 'Kriminal', 'Fantasi'],
    ageRating: '13+',
    fyp: ['film-trending', 'new-release'],
    badge: 'top-10',
    progress: {
      episode: 'Episode 1',
      progressSeconds: 2754
    }
  },
  {
    title: 'Duty After School',
    rating: 4.5,
    cardImage: 'card/duty-after-school.webp',
    posterImage: 'poster/duty-after-school.webp',
    durationSeconds: 9180,
    genres: ['Misteri', 'Kriminal', 'Fantasi'],
    ageRating: '13+',
    fyp: ['new-release'],
    badge: 'new-episode',
    progress: {
      episode: 'Episode 1',
      progressSeconds: 2754
    }
  },
  {
    title: 'Missing',
    rating: 4.5,
    cardImage: 'card/missing.webp',
    posterImage: 'poster/missing.webp',
    durationSeconds: 9180,
    genres: ['Misteri', 'Kriminal', 'Fantasi'],
    ageRating: '13+',
    fyp: ['new-release'],
    badge: null,
    progress: {
      episode: 'Episode 1',
      progressSeconds: 2754
    }
  },
];

export const getInitialFilmDatas = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(initialFilmDatas), 100);
  });
};