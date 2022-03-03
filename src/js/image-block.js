import React from 'react';
import { Flipped } from 'react-flip-toolkit';

const ImageBlock = ({ id, flipKey, children, visible }) => {
  const visibleClass = visible ? '' : `image-block--hidden`;

  return (
    <Flipped flipId={id}>
      <div className={`image-block image-block--${flipKey} ${visibleClass}`}>
        {children}
      </div>
    </Flipped>
  );
};

export default ImageBlock;
