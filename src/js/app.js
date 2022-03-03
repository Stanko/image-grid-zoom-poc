import React, { useState } from 'react';
import { Flipper } from 'react-flip-toolkit';
import Images from './images';

const imageFiles = [];

if (process.env.LOCAL) {
  const imageFilesObject = require('../img/image-**.png');

  for (let imageKey in imageFilesObject) {
    imageFiles[parseInt(imageKey, 10) - 1] = imageFilesObject[imageKey];
  }
} else {
  for (let i = 0; i < 100; i++) {
    imageFiles.push(`https://picsum.photos/seed/${Math.random()}/300/550`);
  }
}

const AnimatedSquare = () => {
  const [flipKey, setFlipKey] = useState('1');
  const [debug, setDebug] = useState(false);

  const blockCount = 24;
  const imagesPerBlock = 10;
  const blocks = [];

  for (let i = 0; i < blockCount; i++) {
    const images = [];
    for (let j = 0; j < imagesPerBlock; j++) {
      images.push(imageFiles[(i * imagesPerBlock + j) % imageFiles.length]);
    }
    blocks.push({
      id: `block-${i}`,
      images,
    });
  }

  return (
    <Flipper flipKey={flipKey}>
      <div className="controls">
        Zoom:
        <button onClick={() => setFlipKey('1')}>1</button>
        <button onClick={() => setFlipKey('0_5')}>0.5</button>
        <button onClick={() => setFlipKey('0_25')}>0.25</button>
        <button onClick={() => setDebug(!debug)}>Toggle debug</button>
      </div>
      <Images
        flipKey={flipKey}
        debug={debug}
        blocks={blocks}
        id="collection1"
      />
      <Images
        flipKey={flipKey}
        debug={debug}
        blocks={blocks}
        id="collection2"
      />
      <Images
        flipKey={flipKey}
        debug={debug}
        blocks={blocks}
        id="collection3"
      />
    </Flipper>
  );
};

export default AnimatedSquare;
