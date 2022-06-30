import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid #d7d7d7;
`;

export const CoinWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-right: 24px;

  min-width: 300px;
`;

export const CoinData = styled.div`
  display: flex;
  text-align: right;
  justify-content: space-between;
  width: 100%;
`;

export const Icon = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
`;

export const Title = styled.h1`
  font-size: 16px;
  width: 150px;
`;

export const Price = styled.p`
  width: 110px;
`;

export const Volume = styled.p`
  width: 155px;
`;

export const Cap = styled.p`
  width: 230px;
`;

export const PercentGreen = styled.p`
  width: 100px;
  color: #11d811;
`;

export const PercentRed = styled.p`
  width: 100px;
  color: #f00606;
`;
