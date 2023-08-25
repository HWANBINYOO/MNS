/* eslint-disable @next/next/no-img-element */
'use client';
import Header from '../../header';
import * as S from './styled';
import { BillboardItem } from 'src/types/songs';

export default function ChartItem({
  name,
  artist,
  image,
  rank,
  last_week_rank,
  peak_rank,
  weeks_on_chart,
}: BillboardItem) {
  return (
    <>
      <S.ChartItem>
        <S.ChartN>{rank}</S.ChartN>
        <img
          alt="1"
          loading="lazy"
          width="150"
          height="150"
          decoding="async"
          data-nimg="1"
          src={image}
        />
        <S.ChartDesc>
          <S.SongName>{name}</S.SongName>
          <S.ArtistName>{artist}</S.ArtistName>
        </S.ChartDesc>
        <S.NumBox>{last_week_rank ?? 'ㅡ'}</S.NumBox>
        <S.NumBox>{peak_rank}</S.NumBox>
        <S.NumBox>{weeks_on_chart}</S.NumBox>
      </S.ChartItem>
    </>
  );
}
