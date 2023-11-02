/* eslint-disable @next/next/no-img-element */
'use client';
import * as S from './styled';
import { ArtistDataType } from 'src/types/artist';
import { useEffect, useState } from 'react';

export default function Artist({ ArtistData }: { ArtistData: ArtistDataType }) {
  const [isFollow, setIsFollow] = useState(false);
  const handleClickBtn = () => {
    if (isFollow) return;
    let localData: string[] = getDataLocalStorage('artists');
    localData.unshift(ArtistData.response.artist.id + '');
    saveDataLocalStorage(localData);
  };

  const getDataLocalStorage = (name: string) => {
    let localData: string[] = localStorage.getItem(name)
      ? JSON.parse(localStorage.getItem(name) ?? '')
      : [];
    return localData;
  };

  const saveDataLocalStorage = (obj: string[]) => {
    localStorage.setItem('artists', JSON.stringify(obj));
    return;
  };

  useEffect(() => {
    const localData: string[] = JSON.parse(
      localStorage.getItem('artists') ?? ''
    );
    localData.includes(ArtistData.response.artist.id + '') && setIsFollow(true);
  }, []);

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
          <S.SubsrtiptBtn
            style={{ backgroundColor: isFollow ? '#1dc7ff' : '#d44339' }}
            onClick={handleClickBtn}
          >
            {isFollow ? '팔로우중' : '팔로우'}
          </S.SubsrtiptBtn>
        </S.SongDesc>
      </S.ArtistBox>
    </>
  );
}
