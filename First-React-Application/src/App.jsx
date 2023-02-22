import { useEffect, useState } from 'react';
import Clicker from './Clicker';
import People from './People';

export default function App({ children }) {
  const [hasClicker, setHasClicker] = useState(true);
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  // ...
  return (
    <>
      <People />
    </>
  );
}
