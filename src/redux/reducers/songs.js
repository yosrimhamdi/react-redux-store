import { FETCH_SONGS } from '../types';

const songs = (state = [], action) => {
  switch (action.type) {
    case FETCH_SONGS:
      return [...action.payload.songs];
    default:
      return state;
  }
};

export default songs;
