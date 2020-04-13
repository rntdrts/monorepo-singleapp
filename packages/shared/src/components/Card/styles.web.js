import styled from 'styled-components';

export const Card = styled.article`
  flex-basis: 20%;
  padding: 0 12px;
  margin-bottom: 24px;
`;

export const CardContainer = styled.div`
  height: 212px;
  background-color: #1d1d1d;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 6px;
  padding: 8px;
`;

export const Title = styled.span`
  flex: 1;
  margin: 10px;
  color: #fefefe;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 140px;
  flex: 1;
  border-radius: 6px 6px 0 0;
`;
