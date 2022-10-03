import styled from 'styled-components';

export const SectionNormal = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
export const SectionCalculator = styled.section`
  width: 20rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #111111;
  border-radius: 2rem;
  -webkit-box-shadow: 20px 31px 11px -1px rgba(0, 0, 0, 0.74);
  -moz-box-shadow: 20px 31px 11px -1px rgba(0, 0, 0, 0.74);
  box-shadow: 20px 31px 11px -1px rgba(0, 0, 0, 0.74);
`;
export const Display = styled.div`
  width: 15rem;
  height: 3.9rem;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 1.5rem;
  padding-right: 1rem;
  color: #2e2e2e;
  background-color: #ededed;
  border-radius: 1rem;
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
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const BtnOperatorRigth = styled.button`
  width: 3rem;
  height: 3rem;
  font-size: 1.5rem;
  font-weight: 600;
  border: none;
  border-radius: 50%;
  margin: 0.3rem;
  color: #332200;
  background-color: #ffbb00;
  cursor: pointer;
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
`;
export const Img = styled.img`
  width: 35px;
  height: 35px;
`;
