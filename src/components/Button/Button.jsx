import React, { useState } from 'react';

const Button = ({ onPress }) => {
  const [x, setX] = useState(0);

  const handleClick = () => {
    setX(x + 1);
    if (onPress) {
      onPress();
    }
  };

  return (
    <button onClick={handleClick}>
      Click me to increase x: {x}
    </button>
  );
};

export default Button;
