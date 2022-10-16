import React, { useState } from 'react';
import * as S from './styled.js';
import Calculator from '../../Img/Calculator.png';

export default function Area({ setCalculator }) {
  const [catheterA, setcatheterA] = useState();
  const [catheterB, setcatheterB] = useState();
  const [catheterFinal, setcatheterFinal] = useState('opposite');
  const [hypotenuse, setHypotenuse] = useState();
  const [result, setResult] = useState();
  const [type, setType] = useState('hypotenuse');

  const [stage, setStage] = useState(0);

  const Solver = () => {
    if (type === 'hypotenuse') {
      const Res = Math.hypot(catheterA, catheterB).toFixed(3);
      setResult(Res);
    } else {
      if ((catheterA || catheterB) > hypotenuse) {
        alert('O catheter não pode ser maior que hipotenusa!');
        return Reset();
      }
      if ((catheterA || catheterB) === hypotenuse) {
        alert('O catheter não pode ser igual a hipotenusa!');
        return Reset();
      }
      const Res = Math.sqrt(
        Math.pow(hypotenuse, 2) -
          (Math.pow(catheterA, 2) || Math.pow(catheterB, 2)),
      );
      setResult(Res.toFixed(3));
    }
  };
  const Reset = () => {
    setHypotenuse();
    setcatheterA();
    setcatheterB();
    setStage(0);
    setResult();
  };

  const ValueClick = (e) => {
    let btnNumber = e.target.value;

    if (type === 'hypotenuse') {
      if (stage === 0) {
        const lastNumber = catheterA !== undefined ? catheterA : '';
        setcatheterA(lastNumber + btnNumber);
      }
      if (stage === 1) {
        const lastNumber = catheterB !== undefined ? catheterB : '';
        setcatheterB(lastNumber + btnNumber);
      }
    } else {
      if (stage === 0) {
        const lastNumber = hypotenuse !== undefined ? hypotenuse : '';
        setHypotenuse(lastNumber + btnNumber);
      }
      if (stage === 1) {
        if (catheterFinal === 'opposite') {
          const lastNumber = catheterA !== undefined ? catheterA : '';
          setcatheterA(lastNumber + btnNumber);
        } else {
          const lastNumber = catheterB !== undefined ? catheterB : '';
          setcatheterB(lastNumber + btnNumber);
        }
      }
    }
  };
  const pointExtra = (e) => {
    let btnNumber = e.target.value;
    let input = e.target.value;
    if (type === 'hypotenuse') {
      if (stage === 0) {
        const lastNumber = catheterA !== undefined ? catheterA : '';
        setcatheterA(lastNumber + btnNumber);
        setcatheterA(catheterA + input);
      } else if (stage === 1) {
        const lastNumber = catheterB !== undefined ? catheterB : '';
        setcatheterB(lastNumber + btnNumber);
        setcatheterB(catheterB + input);
      }
    } else if (type !== 'hypotenuse' && catheterFinal === 'adjacent') {
      if (stage === 0) {
        const lastNumber = hypotenuse !== undefined ? hypotenuse : '';
        setHypotenuse(lastNumber + btnNumber);
      }
      if (stage === 1) {
        const lastNumber = catheterB !== undefined ? catheterB : '';
        setcatheterB(lastNumber + btnNumber);
        setcatheterB(catheterB + input);
      }
    } else if (type !== 'hypotenuse' && catheterFinal === 'opposite') {
      if (stage === 0) {
        const lastNumber = hypotenuse !== undefined ? hypotenuse : '';
        setHypotenuse(lastNumber + btnNumber);
      }
      if (stage === 1) {
        const lastNumber = catheterA !== undefined ? catheterA : '';
        setcatheterA(lastNumber + btnNumber);
        setcatheterA(catheterA + input);
      }
    }
  };

  return (
    <S.SectionPythagoras>
      <h1>Teorema de Pitágoras</h1>
      <p>
        <i>
          "A soma dos quadrados dos catheters é igual ao quadrado da
          hipotenusa."
        </i>
      </p>

      <S.SectionCalculator>
        <S.Container>
          <S.ContainerDisplay>
            <S.Display>
              {type === 'hypotenuse' && result === undefined && (
                <S.Result>
                  H²={catheterA ? catheterA : 'CA'}²+
                  {catheterB ? catheterB : 'CO'}²
                </S.Result>
              )}
              {type !== 'hypotenuse' &&
                catheterFinal === 'opposite' &&
                result === undefined && (
                  <S.Result>
                    CO²={hypotenuse ? hypotenuse : 'H²'}-
                    {catheterA ? catheterA : 'CA'}²
                  </S.Result>
                )}

              {type !== 'hypotenuse' &&
                catheterFinal === 'adjacent' &&
                result === undefined && (
                  <S.Result>
                    CA²={hypotenuse ? hypotenuse : 'H²'}-
                    {catheterB ? catheterB : 'CO'}²
                  </S.Result>
                )}
              {result !== undefined && <S.Result>Resultado: {result}</S.Result>}
            </S.Display>
          </S.ContainerDisplay>

          <S.ContainerChoise>
            <S.ContainerType>
              <div>
                <h4>Calcular o cateto ou a hipotenusa?</h4>
                <S.Select
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                >
                  <option value="hypotenuse">Hipotenusa</option>
                  <option value="catheter">Cateto</option>
                </S.Select>
              </div>
              {type !== 'hypotenuse' && (
                <div>
                  <h4>Qual cateto calcular?</h4>
                  <S.Select
                    onChange={(e) => {
                      setcatheterFinal(e.target.value);
                    }}
                  >
                    <option value="opposite">Cateto Oposto</option>
                    <option value="adjacent">Cateto Adjacente</option>{' '}
                  </S.Select>
                </div>
              )}
            </S.ContainerType>
            <S.ContainerNumber>
              <S.BtnNumber onClick={ValueClick} value={7}>
                7
              </S.BtnNumber>
              <S.BtnNumber onClick={ValueClick} value={8}>
                8
              </S.BtnNumber>
              <S.BtnNumber onClick={ValueClick} value={9}>
                9
              </S.BtnNumber>
              <S.BtnNumber onClick={ValueClick} value={4}>
                4
              </S.BtnNumber>
              <S.BtnNumber onClick={ValueClick} value={5}>
                5
              </S.BtnNumber>
              <S.BtnNumber onClick={ValueClick} value={6}>
                6
              </S.BtnNumber>
              <S.BtnNumber onClick={ValueClick} value={1}>
                1
              </S.BtnNumber>
              <S.BtnNumber onClick={ValueClick} value={2}>
                2
              </S.BtnNumber>
              <S.BtnNumber onClick={ValueClick} value={3}>
                3
              </S.BtnNumber>
              <S.BtnOperator style={{ color: 'red' }} onClick={Reset}>
                AC
              </S.BtnOperator>
              <S.BtnNumber onClick={ValueClick} value={0}>
                0
              </S.BtnNumber>
              <S.BtnNumber onClick={pointExtra} value={'.'}>
                .
              </S.BtnNumber>
              <S.BtnResult
                disabled={stage === 1 && result === undefined ? false : true}
                onClick={Solver}
              >
                =
              </S.BtnResult>
              <S.BtnPage onClick={() => setCalculator('N')}>
                <S.Img src={Calculator} alt="" srcset="" />
              </S.BtnPage>
              {stage === 0 && result === undefined && (
                <S.BtnProximo
                  onClick={() => {
                    setStage(1);
                  }}
                >
                  Proximo
                </S.BtnProximo>
              )}
            </S.ContainerNumber>
          </S.ContainerChoise>
        </S.Container>
      </S.SectionCalculator>
    </S.SectionPythagoras>
  );
}
