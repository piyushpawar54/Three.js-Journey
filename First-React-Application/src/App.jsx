import Clicker from './Clicker';
import { useEffect, useState } from 'react';

export default function App({ children }) {
  const [hasClicker, setHasClicker] = useState(true);
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  // ...
  return (
    <>
      {/* ... */}

      <div>Total count: {count}</div>
      <Clicker increment={increment} />

      {/* ... */}
    </>
  );
}
