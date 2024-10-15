import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface AnimeVideo {
  id: number;
  title: string;
  url: string;
  thumbnail: string;
}

const animeVideos: AnimeVideo[] = [
  {
    id: 1,
    title: "进击的巨人",
    url: "https://example.com/attack-on-titan.mp4",
    thumbnail: "https://source.unsplash.com/random/800x450?anime"
  },
  {
    id: 2,
    title: "鬼灭之刃",
    url: "https://example.com/demon-slayer.mp4",
    thumbnail: "https://source.unsplash.com/random/800x450?japan"
  },
  {
    id: 3,
    title: "我的英雄学院",
    url: "https://example.com/my-hero-academia.mp4",
    thumbnail: "https://source.unsplash.com/random/800x450?hero"
  }
];

function App() {
  const [currentVideo, setCurrentVideo] = useState<AnimeVideo | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const handleVideoSelect = (video: AnimeVideo) => {
    setCurrentVideo(video);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 py-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">动漫视频播放网站</h1>
        </div>
      </header>
      <main className="container mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {currentVideo ? (
              <div className="relative">
                <video
                  src={currentVideo.url}
                  poster={currentVideo.thumbnail}
                  className="w-full rounded-lg shadow-lg"
                  autoPlay={isPlaying}
                  muted={isMuted}
                />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center bg-black bg-opacity-50 rounded-full px-4 py-2">
                  <button onClick={togglePlay} className="text-white">
                    {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                  </button>
                  <h2 className="text-lg font-semibold">{currentVideo.title}</h2>
                  <button onClick={toggleMute} className="text-white">
                    {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-gray-800 rounded-lg shadow-lg aspect-video flex items-center justify-center">
                <p className="text-xl">请选择一个视频开始播放</p>
              </div>
            )}
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">视频列表</h2>
            <ul className="space-y-4">
              {animeVideos.map((video) => (
                <li
                  key={video.id}
                  className="bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer hover:bg-gray-700 transition"
                  onClick={() => handleVideoSelect(video)}
                >
                  <img src={video.thumbnail} alt={video.title} className="w-full h-32 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{video.title}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;