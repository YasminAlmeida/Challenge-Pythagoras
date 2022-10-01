import React, { useState } from 'react';
import * as S from './styled.js';
export default function Area() {
  const [catetoA, setCatetoA] = useState();
  const [catetoB, setCatetoB] = useState();
  const [catetoFinal, setCatetoFinal] = useState();
  const [hypotenuse, setHypotenuse] = useState();
  const [result, setResult] = useState();
  const [type, setType] = useState('hypotenuse');
  const Solver = () => {
    if (type === 'hypotenuse') {
      const Res = Math.hypot(catetoA, catetoB).toFixed(2);
      setResult(Res);
    } else {
      const Res = Math.sqrt(
        Math.pow(hypotenuse, 2) -
          (Math.pow(catetoA, 2) || Math.pow(catetoB, 2)),
      );
      setResult(Res);
    }
    Reset();
  };
  const Reset = () => {
    setHypotenuse();
    setCatetoA();
    setCatetoB();
  };
  return (
    <>
      <h1>Teorema de Pitágoras</h1>
      <p>
        <i>
          "A soma dos quadrados dos catetos é igual ao quadrado da hipotenusa."
        </i>
      </p>
      {result}
      <section>
        <div>
          <h4>Calcular o cateto ou a hipotenusa?</h4>
          <select
            onChange={(e) => {
              setType(e.target.value);
            }}
          >
            <option value="hypotenuse">Hypotenuse</option>
            <option value="cateto">Cateto</option>
          </select>
        </div>
        {type !== 'hypotenuse' && (
          <div>
            <h4>Utilizando Qual Cateto?</h4>
            <select
              onChange={(e) => {
                setCatetoFinal(e.target.value);
              }}
            >
              <option value="oposto">Cateto Oposto</option>
              <option value="adjacente">Cateto Adjacente</option>
            </select>
          </div>
        )}
        <div>
          {catetoFinal !== '' && catetoFinal === 'adjacente' && (
            <div>
              <label>Cateto Adjacente</label>
              <input
                type="number"
                onChange={(e) => {
                  setCatetoA(e.target.value);
                }}
              ></input>
            </div>
          )}
          {catetoFinal !== '' && catetoFinal === 'oposto' && (
            <div>
              <label>Cateto Oposto </label>
              <input
                type="number"
                onChange={(e) => {
                  setCatetoB(e.target.value);
                }}
              ></input>
            </div>
          )}
          {type === 'hypotenuse' && (
            <S.ContainerCount>
              <div>
                <label> Cateto Adjacente</label>
                <input
                  type="number"
                  onChange={(e) => {
                    setCatetoA(e.target.value);
                  }}
                ></input>
              </div>

              <div>
                <label>Cateto Oposto </label>
                <input
                  type="number"
                  onChange={(e) => {
                    setCatetoB(e.target.value);
                  }}
                ></input>
              </div>
            </S.ContainerCount>
          )}
          {type !== 'hypotenuse' && (
            <div>
              <label>Hipotenusa</label>
              <input
                type="number"
                onChange={(e) => {
                  setHypotenuse(e.target.value);
                }}
              ></input>
            </div>
          )}
          <button
            type="submit"
            onClick={() => {
              Solver();
            }}
          >
            =
          </button>
        </div>
        <div>
          <S.Triangulo></S.Triangulo>
        </div>
      </section>
    </>
  );
}
