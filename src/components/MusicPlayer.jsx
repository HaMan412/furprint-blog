import React, { useState, useRef } from 'react';
import AudioPlayer from 'react-h5-audio-player';
// 我们需要手动导入它的 CSS 文件
import 'react-h5-audio-player/lib/styles.css';

const MusicPlayer = ({ songs }) => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const playerRef = useRef(null);

  const handleClickNext = () => {
    setCurrentTrack((currentTrack) => (currentTrack + 1) % songs.length);
  };

  const handleClickPrevious = () => {
    setCurrentTrack((currentTrack) => (currentTrack - 1 + songs.length) % songs.length);
  };

  const handleEnd = () => {
    handleClickNext();
  };

  const handleSongClick = (index) => {
    setCurrentTrack(index);
  };

  return (
    <div>
      <AudioPlayer
        ref={playerRef}
        autoPlayAfterSrcChange={true}
        src={songs[currentTrack].url}
        onEnded={handleEnd}
        showSkipControls={true}
        showJumpControls={false}
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPrevious}
        header={`${songs[currentTrack].title} - ${songs[currentTrack].artist}`}
      />
      <div className="playlist">
        {songs.map((song, index) => (
          <a
            href="javascript:void(0);"
            key={index}
            className={`song-item ${index === currentTrack ? 'playing' : ''}`}
            onClick={() => handleSongClick(index)}
          >
            <div className="song-index">{index + 1}</div>
            <img src={song.cover} alt={song.title} className="song-cover" loading="lazy" />
            <div className="song-info">
              <div className="song-title">{song.title}</div>
              <div className="song-artist">{song.artist}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MusicPlayer;
