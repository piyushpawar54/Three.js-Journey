import { useEffect, useState } from 'react';

export default function Clicker({ increment }) {
  let count = 0;
  // ...

  const buttonClick = () => {
    setCount(count + 1);
    increment();
  };

  // ...
  return (
    <div>
      <div>Clicks count: {count}</div>
      <button buttonClick>Click me</button>
    </div>
  );
}
