import { useState, useRef } from "react";
import Player from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

// 【关键修复】移除 TypeScript 的 `as any` 语法，使用纯 JavaScript 的方式来处理模块导入
const AudioPlayer = Player.default || Player;

const MusicPlayer = ({ songs }) => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const playerRef = useRef(null);

  const handleClickNext = () => {
    setCurrentTrack((currentTrack) => (currentTrack + 1) % songs.length);
  };

  const handleClickPrevious = () => {
    setCurrentTrack(
      (currentTrack) => (currentTrack - 1 + songs.length) % songs.length,
    );
  };

  const handleEnd = () => {
    handleClickNext();
  };

  const handleSongClick = (index) => {
    setCurrentTrack(index);
  };

  if (!songs || songs.length === 0) {
    return <div>暂无歌曲</div>;
  }

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
            className={`song-item ${index === currentTrack ? "playing" : ""}`}
            onClick={() => handleSongClick(index)}
          >
            <div className="song-index">{index + 1}</div>
            <img
              src={song.cover}
              alt={song.title}
              className="song-cover"
              loading="lazy"
            />
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
