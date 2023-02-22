import { useEffect, useState } from 'react';

export default function People() {
  const [people, setPeople] = useState([]);

  const getPeople = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const result = await response.json();

    setPeople(result);
  };

  useEffect(() => {
    getPeople();
  }, []);

  return (
    <>
      <ul>
        {people.map((item, index) => {
          return <li key={people.id}>{`${item.name}`}</li>;
        })}
      </ul>
    </>
  );
}
