import React, { useState } from 'react';
import { Flipped } from 'react-flip-toolkit';

const ImageBlock = ({ id, flipKey, children }) => {
  return (
    <Flipped flipId={id}>
      <div className={`image-block image-block--${flipKey}`}>{children}</div>
    </Flipped>
  );
};

export default ImageBlock;
