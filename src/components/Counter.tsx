import React from 'react';

interface CounterProps {
  name: string;
}

const Counter: React.FC<CounterProps> = ({ name }) => {
  return <div>Hello Counter, {name}</div>;
};

export default Counter;
