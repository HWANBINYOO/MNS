import styled from '@emotion/styled';

export const ChartHeader = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const ChartCategory = styled.div`
  width: 30%;
  font-size: 30px;
  font-weight: bold;
`;

export const ChartHeaderDate = styled.div`
  width: calc(25% + 130px);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid black;
`;

export const NumDesc = styled.div`
  width: 10%;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchInput = styled.input`
  outline: none;
`;
