const townUrl =
  NODE_ENV === 'production' ? 'https://kladr-api.ru' : 'https://kladr-api.ru';

export const configTown = {
  url: `${townUrl}/api.php?`,
  type: 'city',
  limit: 10,
};
