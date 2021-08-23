import React from 'react';
import { connect } from 'react-redux';

import selectSong from '../redux/actions/selectSong';

const SongItem = ({ song, selectSong }) => (
  <div>
    <h2>{song.title}</h2>
    <p>{song.length}</p>
    <button onClick={() => selectSong(song)}>Select Song</button>
  </div>
);

export default connect(null, { selectSong })(SongItem);
