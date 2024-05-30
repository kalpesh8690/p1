import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

const App = () => {
  const [selectedChannel, setSelectedChannel] = useState(null);
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    // Fetch and parse M3U file
    const fetchM3U = async () => {
      try {
        const response = await fetch('https://globalsmart7.github.io/TataPlay-/');
        const text = await response.text();
        const lines = text.split('\n');
        const newChannels = [];
        let currentChannel = null;

        lines.forEach((line) => {
          if (line.startsWith('#EXTINF:')) {
            currentChannel = { name: line.split(',')[1], url: '' };
          } else if (line.startsWith('http')) {
            if (currentChannel) {
              currentChannel.url = line.trim();
              newChannels.push(currentChannel);
              currentChannel = null;
            }
          }
        });

        setChannels(newChannels);
      } catch (error) {
        console.error('Error fetching M3U file:', error);
      }
    };

    fetchM3U();
  }, []);

  const selectChannel = (url) => {
    setSelectedChannel(url);
  };

  return (
    <div className="app">
      <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url={selectedChannel}
        width="100%"
        height="100%"
        controls={true}
      />
    </div>
      <div className="playlist">
      <h2>Channels</h2>
      <ul>
        {channels.map((channel, index) => (
          <li key={index} onClick={() => selectChannel(channel.url)}>
            {channel.name}
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default App;
