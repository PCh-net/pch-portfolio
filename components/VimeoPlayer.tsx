// components/VimeoPlayer.tsx
"use client"
import React from 'react';

type VimeoPlayerProps = {
  videoId: string;
  aspectRatio?: string;
};

const VimeoPlayer: React.FC<VimeoPlayerProps> = ({ videoId, aspectRatio = '16:9' }) => {
  // Calculate padding-bottom percentage based on aspect ratio
  const [width, height] = aspectRatio.split(':').map(Number);
  const paddingBottom = (height / width) * 100;

  return (
    <div className="relative w-full mt-4 bg-blue-500 bg-opacity-20 text-blue-100 p-4" style={{ paddingBottom: `${paddingBottom}%` }}>
      <iframe
        src={`https://player.vimeo.com/video/${videoId}?loop=1&portrait=0&title=0&byline=0`}
        className="absolute top-0 left-0 w-full h-full"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VimeoPlayer;
