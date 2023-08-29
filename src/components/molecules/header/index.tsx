'use client';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import * as S from './styled';

export default function Header() {
  const [searchMsg, setSearchMsg] = useState('');
  const router = useRouter();
  const [isFocus, setFocus] = useState(false);

  return (
    <>
      <S.Header>
        <S.BillboardNavigation>
          <S.BillboardNavLi href="/musicNews">Music News</S.BillboardNavLi>
          <S.BillboardNavLi href="/billboardHot100">Hot 100</S.BillboardNavLi>
          <S.BillboardNavLi href="/billboard200">200</S.BillboardNavLi>
          <S.BillboardNavLi href="/billboardGlobal200">
            Global 200
          </S.BillboardNavLi>
          <S.BillboardNavLi href="artist100">Artist 100</S.BillboardNavLi>
        </S.BillboardNavigation>
        <S.MainLogo>MNS</S.MainLogo>
        <S.SearchBar>
          <S.SearchForm
            onSubmit={(e: FormEvent<HTMLFormElement>) => {
              e.preventDefault();
              const search = e.currentTarget.searchValue.value;
              router.push(`/search/${search}`);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke={'black'}
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <input
              type="text"
              name="searchValue"
              placeholder="Search"
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
            />
          </S.SearchForm>
        </S.SearchBar>
      </S.Header>
    </>
  );
}
