'use client';
import Header from '../header';
import * as S from './styled';

export default function Chart() {
  // const a = await fetchChartData();
  // console.log('a' + a);

  return (
    <>
      <Header />
      <S.Mainchart>{'a'}</S.Mainchart>
    </>
  );
}

// export async function fetchChartData() {
//   const res = await fetch(
//     'https://raw.githubusercontent.com/KoreanThinker/billboard-json/main/billboard-hot-100/recent.json'
//   );
//   const data = await res.json();
//   return data;
// }
