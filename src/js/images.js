import React, { useState } from 'react';
import ImageBlock from './image-block';

const AnimatedSquare = ({ flipKey, debug, id, blocks }) => {
  const visibleBlocks = {
    1: 3,
    '0_5': 6,
    '0_25': 24,
  };

  return (
    <div className={`images ${debug ? 'images--debug' : ''}`}>
      {blocks.map((block, index) => {
        const visible = index < visibleBlocks[flipKey];

        return (
          <ImageBlock
            id={id + block.id}
            key={block.id}
            flipKey={flipKey}
            visible={visible}
          >
            {block.images.map((image) => {
              return (
                <div className="image-wrapper" key={image}>
                  <img className="image" src={image} />
                </div>
              );
            })}
          </ImageBlock>
        );
      })}
    </div>
  );
};

export default AnimatedSquare;

// <img src="https://picsum.photos/id/${i}/300/400" />
