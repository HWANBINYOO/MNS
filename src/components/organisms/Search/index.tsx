'use client';
import SearchItem from 'src/components/molecules/SearchItem';
import { SearchDataType } from 'src/types/search';
import * as S from './styled';

export default function Search({ SearchData }: { SearchData: SearchDataType }) {
  return (
    <>
      <S.SearchHeader></S.SearchHeader>
      <S.SearchList>
        {SearchData.response.hits.map((i, idx) => (
          <SearchItem
            key={idx}
            profileImg={i.result.primary_artist.image_url}
            name={i.result.primary_artist.name}
            id={i.result.primary_artist.id}
            apiPath={i.result.primary_artist.api_path}
          />
        ))}
      </S.SearchList>
    </>
  );
}
