'use client';
import * as S from './styled';

export default function ChartHeader({ category }: { category: string }) {
  return (
    <S.ChartHeader>
      <S.ChartCategory>{category}</S.ChartCategory>
      <S.ChartHeaderDate></S.ChartHeaderDate>
      <S.NumDesc>지난주순위</S.NumDesc>
      <S.NumDesc>최고점순위</S.NumDesc>
      <S.NumDesc>차트인</S.NumDesc>
    </S.ChartHeader>
  );
}
