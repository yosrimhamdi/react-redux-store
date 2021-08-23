import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import fetchSongs from '../redux/actions/fetchSongs';
import SongItem from './SongItem';

const SongList = ({ fetchSongs, songs }) => {
  useEffect(() => {
    fetchSongs();
  }, [fetchSongs]);

  const renderedSong = songs.map((song, i) => <SongItem key={i} song={song} />);

  return <div>{renderedSong}</div>;
};

const mapStateToProps = state => {
  return {
    songs: state.songs,
  };
};

export default connect(mapStateToProps, { fetchSongs })(SongList);
