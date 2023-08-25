'use client';
import Header from '../../header';
import * as S from './styled';
import { BillboardItemList } from 'src/types/songs';
import ChartItem from 'src/components/molecules/ChartItem';
import ChartHeader from 'src/components/molecules/ChartHeader';

export default function Chart({ charts }: { charts: BillboardItemList }) {
  return (
    <>
      <Header />
      <ChartHeader />
      <S.ChartList>
        {charts.data.map((i, idx) => (
          <ChartItem
            key={idx}
            name={i.name}
            artist={i.artist}
            image={i.image}
            rank={i.rank}
            last_week_rank={i.last_week_rank}
            peak_rank={i.peak_rank}
            weeks_on_chart={i.weeks_on_chart}
          />
        ))}
      </S.ChartList>
    </>
  );
}
