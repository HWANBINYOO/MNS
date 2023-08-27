import styled from '@emotion/styled';

export const ChartItem = styled.div`
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-top: 0.1px solid #1e2022;
  border-right: 0.1px solid #1e2022;
`;

export const ChartN = styled.div`
  width: 10%;
  height: 100%;
  font-size: 25px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1e2022;
  color: white;
`;

export const ChartDesc = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

export const SongName = styled.div`
  font-size: 25px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ArtistName = styled.div`
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NumBox = styled.div`
  width: 10%;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
