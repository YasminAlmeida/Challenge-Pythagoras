import styled from 'styled-components';

export const SectionPythagoras = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
export const Triangulo = styled.div`
  margin: 50px 500px;
  border-top-width: 200px;
  border-left-width: 200px;
  border-style: solid;
  border-color: transparent transparent transparent green;
`;
export const SectionCalculator = styled.section`
  height: 28rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #111111;
  border-radius: 2rem;
  -webkit-box-shadow: 20px 31px 11px -1px rgba(0, 0, 0, 0.74);
  -moz-box-shadow: 20px 31px 11px -1px rgba(0, 0, 0, 0.74);
  box-shadow: 20px 31px 11px -1px rgba(0, 0, 0, 0.74);
  width: max-content;
  padding: 30px;
  @media (max-width: 500px) {
    padding: 10px;
  }
`;
export const ContainerType = styled.div`
  display: grid;
  justify-items: start;
  margin-left: 20px;
`;
export const ContainerCount = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: space-between;
`;
export const ContainerDisplay = styled.section`
  display: grid;
  justify-items: center;
`;
export const Display = styled.div`
  width: 28rem;
  height: 4.5rem;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 1.5rem;
  padding-right: 1rem;
  color: #2e2e2e;
  background-color: #ededed;
  border-radius: 1rem;
  @media (max-width: 580px) {
    height: 4rem;
    width: 22rem;
  }
  @media (max-width: 480px) {
    width: 19rem;
  }
`;
export const Historic = styled.span`
  font-size: 1rem;
  margin-bottom: 20px;
  margin-top: 0.1rem;
`;
export const Result = styled.p`
  margin: 0;
  font-size: 1.5rem;
`;
export const BtnOperator = styled.button`
  width: 3rem;
  height: 3rem;
  font-size: 1.5rem;
  font-weight: 600;
  border: none;
  border-radius: 50%;
  margin: 0.3rem;
  cursor: pointer;
  @media (max-width: 480px) {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.2rem;
  }
`;
export const Container = styled.div`
  display: grid;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ContainerChoise = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  align-items: start;
  justify-content: center;
  color: #fff;
  @media (max-width: 580px) {
    grid-template-columns: 150px 1fr;
  }
  @media (max-width: 400px) {
    grid-template-columns: 110px 1fr;
    font-size: 0.95rem;
  }
`;
export const ContainerNumber = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  margin-left: 20px;
  @media (max-width: 400px) {
    grid-template-columns: repeat(3, 65px);
    margin-left: 25px;
  }
`;
export const BtnProximo = styled.button`
  width: 13rem;
  height: 2.4rem;
  font-size: 1.3rem;
  font-weight: 600;
  grid-column: 1/-1;
  border: none;
  border-radius: 5px;
  margin: 0.3rem;
  color: #332200;
  background-color: #ffbb00;
  cursor: pointer;
  @media (max-width: 580px) {
    width: 11.5rem;
  }
  @media (max-width: 480px) {
    width: 10.5rem;
  }
  @media (max-width: 400px) {
    width: 10rem;
    height: 2rem;
  }
`;
export const BtnResult = styled.button`
  width: 8.5rem;
  height: 2.4rem;
  font-size: 1.3rem;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  margin: 0.3rem;
  color: #332200;
  background-color: #fff;
  cursor: pointer;
  grid-column: 1/3;
  @media (max-width: 580px) {
    width: 7.5rem;
  }
  @media (max-width: 480px) {
    width: 7.5rem;
  }
  @media (max-width: 400px) {
    width: 7rem;
    height: 2rem;
  }
`;
export const Select = styled.select`
  width: 130px;
  height: 25px;
  border-radius: 4px;
  text-align: center;
  @media (max-width: 400px) {
    width: 110px;
  }
`;
export const BtnNumber = styled.button`
  width: 3rem;
  height: 3rem;
  font-size: 1.5rem;
  font-weight: 600;
  border: none;
  border-radius: 50%;
  margin: 0.3rem;
  color: #2e2e2e;
  background-color: #ededed;
  cursor: pointer;
  @media (max-width: 480px) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;
export const BtnPage = styled.button`
  width: 3rem;
  height: 3rem;
  font-size: 1.5rem;
  font-weight: 600;
  border: none;
  border-radius: 50%;
  margin: 0.3rem;
  cursor: pointer;
  grid-column: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 480px) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;
export const Img = styled.img`
  width: 35px;
  height: 35px;

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
  }
`;
