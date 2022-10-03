import React, { useState } from 'react';
import * as S from './styled.js';
import OtherPage from '../../Img/OtherPageP.png';
export default function Normal({ setCalculator }) {
  const [number, setNumber] = useState(0);
  const [oldnumber, setOldnumber] = useState();
  const [operator, setOperator] = useState();
  const [result, setResult] = useState();

  const ValueClick = (e) => {
    console.log(e.target.value);
    let btnnumber = e.target.value;
    number === 0 ? setNumber(btnnumber) : setNumber(number + btnnumber);
  };
  const Changeoperator = (e) => {
    setOperator(e.target.value);
    setOldnumber(number);
    setNumber(0);
  };
  const operations = () => {
    if (operator === '/') {
      setResult(parseFloat(oldnumber) / parseFloat(number));
    } else if (operator === '*') {
      setResult(parseFloat(oldnumber) * parseFloat(number));
    } else if (operator === '+') {
      setResult(parseFloat(oldnumber) + parseFloat(number));
    } else if (operator === '-') {
      setResult(parseFloat(oldnumber) - parseFloat(number));
    }
    reset();
  };
  const porcentage = (e) => {
    setNumber(number / 100);
    setOperator();
    setOldnumber();
  };
  const reset = () => {
    setOldnumber();
    setOperator();
    setNumber(0);
  };
  const resetAll = () => {
    setNumber(0);
    setResult(0);
  };
  //////////////////////////////
  ///////////////////////////
  const changeSign = () => {
    if (number > 0) {
      setNumber(-number);
    } else {
      setNumber(Math.abs(number));
    }
  };
  const pointExtra = (e) => {
    let input = e.target.value;
    if (number === 0) {
      setNumber(input);
    } else {
      setNumber(number + input);
    }
  };
  return (
    <S.SectionNormal>
      <h1>Calculadora</h1>
      <p>
        <i>"Programa computacional que faz cálculos matemáticos"</i>
      </p>
      <S.SectionCalculator>
        <S.Display>
          <S.Historic>
            {oldnumber}
            {operator}
            {number}
          </S.Historic>
          <S.Result>{result}</S.Result>
        </S.Display>

        <S.Container>
          <S.BtnOperator style={{ color: 'red' }} onClick={resetAll}>
            AC
          </S.BtnOperator>
          <S.BtnOperator onClick={porcentage} value={'%'}>
            %
          </S.BtnOperator>
          <S.BtnOperator onClick={changeSign}>+/-</S.BtnOperator>
          <S.BtnOperatorRigth onClick={Changeoperator} value={'/'}>
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
          <S.BtnOperatorRigth onClick={Changeoperator} value={'*'}>
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
          <S.BtnOperatorRigth onClick={Changeoperator} value={'-'}>
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
          <S.BtnOperatorRigth onClick={Changeoperator} value={'+'}>
            +
          </S.BtnOperatorRigth>
          <S.BtnNumber onClick={ValueClick} value={0}>
            0
          </S.BtnNumber>
          <S.BtnNumber onClick={pointExtra} value={'.'}>
            .
          </S.BtnNumber>
          <S.BtnOperator onClick={operations} value={'='}>
            =
          </S.BtnOperator>
          <S.BtnOperator onClick={() => setCalculator('A')}>
            <S.Img src={OtherPage} alt="Pythagoras svg" srcset="" />
          </S.BtnOperator>
        </S.Container>
      </S.SectionCalculator>
    </S.SectionNormal>
  );
}
