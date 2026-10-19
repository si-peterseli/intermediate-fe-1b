const initialFilmDatas = [
  {
    title: 'Don\'t Look Up',
    rating: 4.5,
    cardImage: 'card/dont-look-up.png',
    posterImage: null,
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
    cardImage: 'card/blue-lock.png',
    posterImage: null,
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
    cardImage: 'card/the-batman.png',
    posterImage: 'poster/the-batman.png',
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
    cardImage: 'card/a-man-called-otto.png',
    posterImage: 'poster/a-man-called-otto.png',
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
    cardImage: null,
    posterImage: 'poster/suzune.png',
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
    cardImage: 'card/jurrasic-world.png',
    posterImage: 'poster/jurrasic-world.png',
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
    cardImage: 'card/sonic-2.png',
    posterImage: 'poster/sonic-2.png',
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
    cardImage: 'card/all-of-us-are-dead.png',
    posterImage: 'poster/all-of-us-are-dead.png',
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
    cardImage: 'card/big-hero-6.png',
    posterImage: 'poster/big-hero-6.png',
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
    cardImage: null,
    posterImage: 'poster/the-tomorrow-war.png',
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
    cardImage: null,
    cardImage: 'card/quantumania.png',
    posterImage: 'poster/quantumania.png',
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
    cardImage: null,
    cardImage: 'card/guardian-of-the-galaxy.png',
    posterImage: 'poster/guardian-of-the-galaxy.png',
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
    cardImage: null,
    cardImage: 'card/the-little-mermaid.png',
    posterImage: 'poster/the-little-mermaid.png',
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
    cardImage: null,
    cardImage: 'card/duty-after-school.png',
    posterImage: 'poster/duty-after-school.png',
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
    cardImage: null,
    cardImage: 'card/missing.png',
    posterImage: 'poster/missing.png',
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
    setTimeout(() => resolve(initialFilmDatas), 300);
  });
};