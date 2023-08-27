'use client';
import * as S from './styled';

export default function Header() {
  return (
    <>
      <S.Header>
        <S.BillboardNavigation>
          {/* Billboard */}
          <S.BillboardNavLi href="MusicNews">Music News</S.BillboardNavLi>
          <S.BillboardNavLi href="BillboardHot100">Hot 100</S.BillboardNavLi>
          <S.BillboardNavLi href="Billboard200">200</S.BillboardNavLi>
          <S.BillboardNavLi href="BillboardGlobal200">
            Global 200
          </S.BillboardNavLi>
        </S.BillboardNavigation>
        <S.MainLogo>MNS</S.MainLogo>
        <S.SearchBar>a</S.SearchBar>
      </S.Header>
    </>
  );
}
