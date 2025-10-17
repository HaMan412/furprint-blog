// 【关键修复】我们不再直接导入 React，因为它在新的 JSX 转换中不再是必需的
import { useState, useRef } from 'react';
// 【关键修复】我们先导入整个“信封”
import Player from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

// 【关键修复】在这里“拆信封”：如果 Player 是一个带 default 属性的对象，就用它的 default，否则就用它本身。
// (window as any) 这种技巧是告诉 TypeScript 不要检查这行，因为我们知道自己在做什么。
const AudioPlayer = (Player as any).default || Player;

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

  // 确保歌曲数组不为空
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
