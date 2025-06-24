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
        data-id="SEU_ID_DO_VIDEO"
        style={{ width: '100%', height: '400px' }}
      ></vturb-smartplayer>
    </div>
  );
};

export default VideoSection;
