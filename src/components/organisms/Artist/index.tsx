/* eslint-disable @next/next/no-img-element */
'use client';
import * as S from './styled';
import { ArtistDataType } from 'src/types/artist';

export default function Artist({ ArtistData }: { ArtistData: ArtistDataType }) {
  const handleClickBtn = () => {
    let localData: string[] = getDataLocalStorage('artists');
    console.log('i' + localData);

    localData.unshift(ArtistData.response.artist.id + '');
    saveDataLocalStorage(localData);
  };

  const getDataLocalStorage = (name: string) => {
    let localData = localStorage.getItem(name)
      ? JSON.parse(localStorage.getItem(name) ?? '')
      : [];
    return localData;
  };

  const saveDataLocalStorage = (obj: string[]) => {
    localStorage.setItem('artists', JSON.stringify(obj));
    return;
  };

  return (
    <>
      <S.SongHeader
        style={{
          backgroundImage: `url(${ArtistData.response.artist.header_image_url})`,
        }}
      />
      <S.ArtistBox>
        <img
          alt="1"
          loading="lazy"
          width="380"
          height="380"
          decoding="async"
          data-nimg="1"
          src={ArtistData.response.artist.image_url}
        />
        <S.SongDesc>
          <S.SongName>{ArtistData.response.artist.name}</S.SongName>
          <S.SubsrtiptBtn onClick={handleClickBtn}>팔로우</S.SubsrtiptBtn>
        </S.SongDesc>
      </S.ArtistBox>
    </>
  );
}
