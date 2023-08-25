'use client';
import * as S from './styled';

export default function Header() {
  return (
    <>
      <S.Header>
        <S.BillboardNavigation>
          {/* Billboard */}
          <S.BillboardNavLi>Hot 100</S.BillboardNavLi>
          <S.BillboardNavLi>200</S.BillboardNavLi>
          <S.BillboardNavLi>Global 200</S.BillboardNavLi>
        </S.BillboardNavigation>
        <S.MainLogo>MNS</S.MainLogo>
        <S.SearchBar>a</S.SearchBar>
      </S.Header>
    </>
  );
}
