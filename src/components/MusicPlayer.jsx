import React, { useEffect, useRef } from 'react';
import Plyr from 'plyr-react';
import 'plyr-react/dist/plyr.css';

const MusicPlayer = ({ songs }) => {
  const ref = useRef(null);

  // 将我们的歌曲数据转换成 Plyr 需要的格式
  const sources = songs.map(song => ({
    type: 'audio',
    title: song.title,
    sources: [
      {
        src: song.url,
        type: 'audio/mp3',
      },
    ],
    poster: song.cover, // 封面
  }));

  // 点击歌曲列表项时，切换播放器的歌曲
  const handleSongClick = (index) => {
    if (ref.current && ref.current.plyr) {
      ref.current.plyr.source = {
        type: 'audio',
        sources: [{ src: songs[index].url, type: 'audio/mp3' }],
        title: songs[index].title,
        poster: songs[index].cover,
      };
      ref.current.plyr.play();
    }
  };

  // 绑定点击事件到全局，因为 Astro 组件的特殊性
  useEffect(() => {
    const songItems = document.querySelectorAll('.song-item');
    songItems.forEach((item, index) => {
      // 清理旧的事件监听器，防止重复绑定
      const newItem = item.cloneNode(true);
      item.parentNode.replaceChild(newItem, item);
      
      newItem.addEventListener('click', () => handleSongClick(index));
    });
  }, [songs]);

  return (
    <div>
      <Plyr ref={ref} source={null} options={{}} />
      <div className="playlist">
        {songs.map((song, index) => (
          <a href="javascript:void(0);" key={index} className="song-item" data-index={index}>
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
