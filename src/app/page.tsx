import Chart from 'src/components/organisms/home';
import { BillboardItem, BillboardItemList } from 'src/types/songs';

export default async function Home() {
  const charts: BillboardItemList = await fetchChartData();
  console.log(charts);
  return (
    <>
      <Chart charts={charts} />
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
