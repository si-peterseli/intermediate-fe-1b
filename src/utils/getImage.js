const images = import.meta.glob('/src/assets/images/**/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
});

export const getImage = (path) => images[`/src/assets/images/${path}`];