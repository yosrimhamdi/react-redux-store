import { SELECT_SONG } from '../types';

const selectedSong = (state = null, action) => {
  switch (action.type) {
    case SELECT_SONG:
      return action.payload;
    default:
      return state;
  }
};

export default selectedSong;
