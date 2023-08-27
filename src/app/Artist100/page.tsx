import Header from 'src/components/molecules/header';
import Chart from 'src/components/organisms/home';
import { BillboardItemList } from 'src/types/songs';

export default async function Artist100() {
  const charts: BillboardItemList = await fetchChartData();
  return (
    <>
      <Header />
      <Chart charts={charts} category={'Billboard Artist 100'} />
    </>
  );
}

export async function fetchChartData() {
  const res = await fetch(
    'https://raw.githubusercontent.com/KoreanThinker/billboard-json/main/billboard-artist-100/recent.json'
  );
  const data = await res.json();
  return data;
}
