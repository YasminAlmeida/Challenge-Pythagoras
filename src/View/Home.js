import React, { useState } from 'react';
import Pythagoras from '../Components/Pythagoras/index.js';
import Normal from '../Components/Normal/index.js';

export default function Home() {
  const [Calculator, setCalculator] = useState('A');
  return (
    <>
      {Calculator === 'N' && <Normal setCalculator={setCalculator} />}
      {Calculator === 'A' && <Pythagoras setCalculator={setCalculator} />}
    </>
  );
}
