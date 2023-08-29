/* eslint-disable @next/next/no-img-element */
'use client';
import * as S from './styled';
import { SearchItemType } from 'src/types/search';
import { useRouter } from 'next/navigation';

export default function SearchItem({
  profileImg,
  name,
  id,
  apiPath,
  title,
}: SearchItemType) {
  const router = useRouter();
  return (
    <>
      <S.SearchItem onClick={() => router.push(`/${apiPath}`)}>
        <img
          alt="1"
          loading="lazy"
          width="180"
          height="180"
          decoding="async"
          data-nimg="1"
          src={profileImg}
        />
        <div>
          <S.SearchItemName>{title}</S.SearchItemName>
          <S.SearchItArtists>{name}</S.SearchItArtists>
        </div>
      </S.SearchItem>
    </>
  );
}
