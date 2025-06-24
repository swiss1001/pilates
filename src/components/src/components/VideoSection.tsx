import { useEffect } from 'react';

const VideoSection = () => {
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
        data-id="vid_65f3bf5b5448bc00082f1aef"
        style={{ width: '100%', height: '400px' }}
      ></vturb-smartplayer>
    </div>
  );
};

export default VideoSection;
