import { Header } from 'src/components/molecules/header/styled';
import Chart from 'src/components/organisms/home';
import { BillboardItem, BillboardItemList } from 'src/types/songs';

export default async function Home() {
  const charts: BillboardItemList = await fetchChartData();
  return (
    <>
      <Chart charts={charts} category={'Billboard Hot 100'} />
    </>
  );
}

export async function fetchChartData() {
  const res = await fetch(
    'https://raw.githubusercontent.com/KoreanThinker/billboard-json/main/billboard-hot-100/recent.json'
  );
  const data = await res.json();
  return data;
}
