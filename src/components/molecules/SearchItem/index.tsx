/* eslint-disable @next/next/no-img-element */
'use client';
import * as S from './styled';
import { SearchItemType } from 'src/types/search';

export default function SearchItem({
  profileImg,
  name,
  id,
  apiPath,
}: SearchItemType) {
  return (
    <>
      <S.SearchItem>
        <img
          alt="1"
          loading="lazy"
          width="140"
          height="140"
          decoding="async"
          data-nimg="1"
          src={profileImg}
        />
        <S.SearchItemName>{name}</S.SearchItemName>
      </S.SearchItem>
    </>
  );
}
