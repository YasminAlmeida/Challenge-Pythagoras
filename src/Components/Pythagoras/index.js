import React, { useState } from 'react';
import * as S from './styled.js';
export default function Area() {
  const [catetoA, setCatetoA] = useState();
  const [catetoB, setCatetoB] = useState();
  const [result, setResult] = useState();

  const Solver = () => {
    const Res = Math.hypot(catetoA, catetoB).toFixed(2);
    setResult(Res);
  };
  return (
    <>
      <h1>Teorema de Pitágoras</h1>
      <p>
        <i>
          "A soma dos quadrados dos catetos é igual ao quadrado da hipotenusa."
        </i>
      </p>
      <section>
        <div>
          <p>Resultado da hipotenusa: {result} </p>
        </div>
        <div>
          <label>
            Cateto Adjacente
            <input
              type="number"
              onChange={(e) => {
                setCatetoA(e.target.value);
              }}
            ></input>
          </label>
          <label>
            Cateto Oposto
            <input
              type="number"
              onChange={(e) => {
                setCatetoB(e.target.value);
              }}
            ></input>
          </label>

          <button
            onClick={() => {
              Solver();
            }}
          >
            =
          </button>
        </div>
        <div>
          <span>catA</span>
          <S.Triangulo></S.Triangulo>
          <span>catB</span>
        </div>
      </section>
    </>
  );
}
