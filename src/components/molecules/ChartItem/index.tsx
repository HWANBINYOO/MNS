/* eslint-disable @next/next/no-img-element */
'use client';
import * as S from './styled';
import { BillboardItem } from 'src/types/billboard';
import { useRouter } from 'next/navigation';

export default function ChartItem({
  name,
  artist,
  image,
  rank,
  last_week_rank,
  peak_rank,
  weeks_on_chart,
}: BillboardItem) {
  const router = useRouter();
  return (
    <>
      <S.ChartItem onClick={() => router.push(`/search/${name}`)}>
        <S.ChartN>{rank}</S.ChartN>
        <img
          alt="1"
          loading="lazy"
          width="130"
          height="130"
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
