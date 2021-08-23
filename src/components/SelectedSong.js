import React from 'react';
import { connect } from 'react-redux';

const SelectedSong = ({ selectedSong }) => {
  if (!selectedSong) {
    return null;
  }

  return (
    <div>
      <h1>{selectedSong.title}</h1>
      <h4>{selectedSong.length}</h4>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    selectedSong: state.selectedSong,
  };
};

export default connect(mapStateToProps)(SelectedSong);
