'use client';
import * as S from './styled';

export default function ChartHeader() {
  return (
    <S.ChartHeader>
      <S.ChartCategory>Billboard Hot 100</S.ChartCategory>
      <S.ChartHeaderDate></S.ChartHeaderDate>
      <S.NumDesc>지난주순위</S.NumDesc>
      <S.NumDesc>최고점순위</S.NumDesc>
      <S.NumDesc>차트인</S.NumDesc>
    </S.ChartHeader>
  );
}
