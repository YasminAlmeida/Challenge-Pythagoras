import React, { useState } from 'react';
import * as S from './styled.js';
export default function Normal() {
  const [Number, SetNumber] = useState(0);
  const [OldNumber, setOldNumber] = useState();
  const [Operator, setOperator] = useState();
  const [Result, setResult] = useState();
  const ValueClick = (e) => {
    console.log(e.target.value);
    let btnNumber = e.target.value;
    Number === 0 ? SetNumber(btnNumber) : SetNumber(Number + btnNumber);
  };
  const ChangeOperator = (e) => {
    setOperator(e.target.value);
    setOldNumber(Number);
    SetNumber(0);
  };
  const Operations = () => {
    if (Operator === '/') {
      setResult(parseFloat(OldNumber) / parseFloat(Number));
    } else if (Operator === '*') {
      setResult(parseFloat(OldNumber) * parseFloat(Number));
    } else if (Operator === '+') {
      setResult(parseFloat(OldNumber) + parseFloat(Number));
    } else if (Operator === '-') {
      setResult(parseFloat(OldNumber) - parseFloat(Number));
    }
    reset();
  };
  const Porcentage = (e) => {
    SetNumber(Number / 100);
  };
  const reset = () => {
    setOldNumber();
    setOperator();
    SetNumber(0);
  };

  return (
    <section>
      <p>
        {OldNumber}
        {Operator}
        {Number}
      </p>
      <p>Resultado: {Result}</p>
      <h2>teste</h2>
      <S.Container>
        <button onClick={reset}>AC</button>
        {/* <button>+/-</button> */}
        <button onClick={Porcentage} value={'%'}>
          %
        </button>
        <button onClick={ChangeOperator} value={'/'}>
          /
        </button>
        <button onClick={ValueClick} value={8}>
          8
        </button>
        <button onClick={ValueClick} value={9}>
          9
        </button>
        <button onClick={ChangeOperator} value={'*'}>
          X
        </button>
        <button onClick={ValueClick} value={4}>
          4
        </button>
        <button onClick={ValueClick} value={5}>
          5
        </button>
        <button onClick={ValueClick} value={6}>
          6
        </button>
        <button onClick={ChangeOperator} value={'-'}>
          -
        </button>
        <button onClick={ValueClick} value={1}>
          1
        </button>
        <button onClick={ValueClick} value={2}>
          2
        </button>
        <button onClick={ValueClick} value={3}>
          3
        </button>
        <button onClick={ChangeOperator} value={'+'}>
          +
        </button>
        <button onClick={ValueClick} value={0}>
          0
        </button>
        <button onClick={Operations} value={'='}>
          =
        </button>
      </S.Container>
    </section>
  );
}
