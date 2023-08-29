/* eslint-disable @next/next/no-img-element */
'use client';
import * as S from './styled';
import { ArtistDataType } from 'src/types/artist';

export default function Artist({ ArtistData }: { ArtistData: ArtistDataType }) {
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
          <S.SubsrtiptBtn>팔로우</S.SubsrtiptBtn>
        </S.SongDesc>
      </S.ArtistBox>
    </>
  );
}
