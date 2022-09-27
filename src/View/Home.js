import React, { useState } from 'react';
import Area from '../Components/Area.js';
import Normal from '../Components/Normal.js';
import Perimeter from '../Components/Perimeter.js';

export default function Home() {
  const [Calculator, setCalculator] = useState('N');
  return (
    <>
      <button onClick={() => setCalculator('N')}>N</button>
      <button onClick={() => setCalculator('P')}>P</button>
      <button onClick={() => setCalculator('A')}>A</button>
      {Calculator === 'N' && <Normal />}
      {Calculator === 'A' && <Area />}
      {Calculator === 'P' && <Perimeter />}
    </>
  );
}
