import { SELECT_SONG } from '../types';

const selectSong = song => ({
  type: SELECT_SONG,
  payload: song,
});

export default selectSong;
