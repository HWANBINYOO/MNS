'use client';
import SearchItem from 'src/components/molecules/SearchItem';
import { SearchDataType } from 'src/types/search';
import * as S from './styled';

export default function Search({ SearchData }: { SearchData: SearchDataType }) {
  return (
    <>
      <S.SearchHeader>총 {SearchData.response.hits.length} 곡</S.SearchHeader>
      <S.SearchList>
        {SearchData.response.hits.map((i, idx) => (
          <SearchItem
            key={idx}
            profileImg={i.result.header_image_url}
            name={i.result.artist_names}
            id={i.result.id}
            apiPath={i.result.api_path}
            title={i.result.title}
          />
        ))}
      </S.SearchList>
    </>
  );
}
