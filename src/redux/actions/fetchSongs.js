import { FETCH_SONGS } from '../types';
import jsonPlaceholder from '../../apis/jsonPlaceholder';

const fetchSongs = () => async dispatch => {
  await jsonPlaceholder.get('/');

  dispatch({
    type: FETCH_SONGS,
    payload: [
      {
        title: 'the great song 1',
        length: '8:00',
      },
      {
        title: 'the great song 2',
        length: '1:00',
      },
    ],
  });
};

export default fetchSongs;
