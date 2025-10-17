import { useEffect, useRef } from 'react';
import Plyr from 'plyr-react';
// 【关键修复】删除下面这行有问题的 import
// import 'plyr-react/dist/plyr.css'; 

const MusicPlayer = ({ songs }) => {
  const ref = useRef(null);

  // 点击歌曲列表项时，切换播放器的歌曲
  const handleSongClick = (index) => {
    if (ref.current && ref.current.plyr) {
      ref.current.plyr.source = {
        type: 'audio',
        sources: [{ src: songs[index].url, type: 'audio/mp3' }],
        title: songs[index].title,
        poster: songs[index].cover,
      };
      // 检查播放器是否准备好，并尝试播放
      ref.current.plyr.once('ready', () => {
        ref.current.plyr.play();
      });
      // 如果已经准备好，直接播放
      if(ref.current.plyr.ready) {
        ref.current.plyr.play();
      }
    }
  };

  // 绑定点击事件到全局
  useEffect(() => {
    const songItems = document.querySelectorAll('.song-item');
    
    // 创建一个 AbortController 来管理事件监听器
    const controller = new AbortController();
    const signal = controller.signal;

    songItems.forEach((item, index) => {
      item.addEventListener('click', () => handleSongClick(index), { signal });
    });

    // 在组件卸载时，清理所有事件监听器
    return () => {
      controller.abort();
    };
  }, [songs]);

  return (
    <div>
      {/* 初始化时不加载任何音源，等待用户点击 */}
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
