import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

interface CounterProps {
  name: string;
}

const Counter: React.FC<CounterProps> = ({ name }) => {
  return (
    <div>
      Hello Counter, {name} <FaChevronDown />
    </div>
  );
};

export default Counter;
