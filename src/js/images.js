import React, { useState } from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';
import ImageBlock from './image-block';

const AnimatedSquare = () => {
  const [flipKey, setFlipKey] = useState(1);
  const [debug, setDebug] = useState(false);

  const blockCount = 20;
  const imagesPerBlock = 8;
  const blocks = [];

  for (let i = 0; i < blockCount; i++) {
    const images = [];
    for (let j = 0; j < imagesPerBlock; j++) {
      images.push(`https://picsum.photos/id/${i * imagesPerBlock + j}/300/400`);
    }
    blocks.push({
      id: `block-${i}`,
      images,
    });
  }

  return (
    <Flipper flipKey={flipKey}>
      <div class="controls">
        Zoom:
        <button onClick={() => setFlipKey('1')}>1</button>
        <button onClick={() => setFlipKey('0_5')}>0.5</button>
        <button onClick={() => setFlipKey('0_25')}>0.25</button>
        <button onClick={() => setDebug(!debug)}>Toggle debug</button>
      </div>
      <div class={`images ${debug ? 'images--debug' : ''}`}>
        {blocks.map((block, index) => {
          return (
            <ImageBlock id={block.id} flipKey={flipKey}>
              {block.images.map((image) => {
                return (
                  <div class="image-wrapper" key={image}>
                    <img class="image" src={image} />
                  </div>
                );
              })}
            </ImageBlock>
          );
        })}
      </div>
    </Flipper>
  );
};

export default AnimatedSquare;

// <img src="https://picsum.photos/id/${i}/300/400" />
