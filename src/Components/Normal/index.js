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
  const resetAll = () => {
    SetNumber(0);
    setResult(0);
  };
  return (
    <S.SectionCalculator>
      <S.Display>
        <S.Historic>
          {OldNumber}
          {Operator}
          {Number}
        </S.Historic>
        <S.Result>{Result}</S.Result>
      </S.Display>

      <S.Container>
        <S.BtnOperator onClick={resetAll}>AC</S.BtnOperator>
        <S.BtnOperator onClick={Porcentage} value={'%'}>
          %
        </S.BtnOperator>
        <S.BtnOperator onClick={Porcentage} value={'+/-'}>
          +/-
        </S.BtnOperator>
        <S.BtnOperatorRigth onClick={ChangeOperator} value={'/'}>
          /
        </S.BtnOperatorRigth>
        <S.BtnNumber onClick={ValueClick} value={7}>
          7
        </S.BtnNumber>
        <S.BtnNumber onClick={ValueClick} value={8}>
          8
        </S.BtnNumber>
        <S.BtnNumber onClick={ValueClick} value={9}>
          9
        </S.BtnNumber>
        <S.BtnOperatorRigth onClick={ChangeOperator} value={'*'}>
          X
        </S.BtnOperatorRigth>
        <S.BtnNumber onClick={ValueClick} value={4}>
          4
        </S.BtnNumber>
        <S.BtnNumber onClick={ValueClick} value={5}>
          5
        </S.BtnNumber>
        <S.BtnNumber onClick={ValueClick} value={6}>
          6
        </S.BtnNumber>
        <S.BtnOperatorRigth onClick={ChangeOperator} value={'-'}>
          -
        </S.BtnOperatorRigth>
        <S.BtnNumber onClick={ValueClick} value={1}>
          1
        </S.BtnNumber>
        <S.BtnNumber onClick={ValueClick} value={2}>
          2
        </S.BtnNumber>
        <S.BtnNumber onClick={ValueClick} value={3}>
          3
        </S.BtnNumber>
        <S.BtnOperatorRigth onClick={ChangeOperator} value={'+'}>
          +
        </S.BtnOperatorRigth>
        <S.BtnNumber onClick={ValueClick} value={0}>
          0
        </S.BtnNumber>
        <S.BtnOperator onClick={Operations} value={'='}>
          =
        </S.BtnOperator>
      </S.Container>
    </S.SectionCalculator>
  );
}
