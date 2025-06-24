import { useEffect } from 'react';

const VideoAbout = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://player.vturb.com.br/player.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ width: '100%', maxWidth: '720px', margin: '0 auto' }}>
      <vturb-smartplayer
        data-id="vid-67526d38fbf820d8fc346500"
        style={{ width: '100%', height: '400px' }}
      ></vturb-smartplayer>
    </div>
  );
};

export default VideoAbout;
