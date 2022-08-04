import axios from 'axios';

export default function getFoto(searchInput, page) {
  const BASE_URL = 'https://pixabay.com/api/';

  const options = new URLSearchParams({
    key: '28585306-e4853ffc00a22ab5f0bd1fbb4',
    q: searchInput,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: page,
    per_page: '12',
  });

  fetch(` ${BASE_URL}?${options}`);
}
