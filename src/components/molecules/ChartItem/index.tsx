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
  // const a = await fetchChartData();
  // console.log('a' + a);

  return (
    <>
      <S.ChartItem>
        <S.ChartN>1</S.ChartN>
        <img
          alt="1"
          loading="lazy"
          width="200"
          height="200"
          decoding="async"
          data-nimg="1"
          src={image}
        />
        <S.ChartDesc>
          <S.SongName></S.SongName>
          <S.ArtistName></S.ArtistName>
        </S.ChartDesc>
      </S.ChartItem>
    </>
  );
}
