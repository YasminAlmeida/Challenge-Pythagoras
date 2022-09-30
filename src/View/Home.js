import React, { useState } from 'react';
import Pythagoras from '../Components/Pythagoras/index.js';
import Normal from '../Components/Normal/index.js';
import Perimeter from '../Components/Perimeter/index.js';

export default function Home() {
  const [Calculator, setCalculator] = useState('N');
  return (
    <>
      <button onClick={() => setCalculator('N')}>N</button>
      <button onClick={() => setCalculator('P')}>P</button>
      <button onClick={() => setCalculator('A')}>A</button>
      {Calculator === 'N' && <Normal />}
      {Calculator === 'A' && <Pythagoras />}
      {Calculator === 'P' && <Perimeter />}
    </>
  );
}
