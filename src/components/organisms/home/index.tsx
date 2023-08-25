'use client';
import Header from '../../header';
import * as S from './styled';
import { BillboardItemList } from 'src/types/songs';
import ChartItem from 'src/components/molecules/ChartItem';

export default function Chart({ charts }: { charts: BillboardItemList }) {
  // const a = await fetchChartData();
  // console.log('a' + a);

  return (
    <>
      <Header />
      <S.ChartList>{'a'}</S.ChartList>
      <ChartItem
        name={''}
        artist={''}
        image={''}
        rank={0}
        last_week_rank={null}
        peak_rank={0}
        weeks_on_chart={0}
      />
    </>
  );
}
