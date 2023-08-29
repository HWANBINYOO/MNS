/* eslint-disable @next/next/no-img-element */
'use client';
import { SongDataType } from 'src/types/songs';
import * as S from './styled';
import { useRouter } from 'next/navigation';
import Script from 'next/script';
import YouTube from 'react-youtube';

export default function Song({ SongData }: { SongData: SongDataType }) {
  const router = useRouter();
  const match =
    SongData.response.song.media[0]?.url.match(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
    ) ?? '';
  const videoId = match[7];

  return (
    <>
      <S.SongHeader>
        <img
          alt="1"
          loading="lazy"
          width="250"
          height="250"
          decoding="async"
          data-nimg="1"
          src={SongData.response.song.header_image_url}
        />
        <S.SongDesc>
          <S.SongName>{SongData.response.song.title}</S.SongName>
          <S.SongDescBottom>
            <S.SongArtist
              onClick={() => router.push(SongData.response.song.api_path)}
            >
              {SongData.response.song.artist_names}
            </S.SongArtist>
            <S.SongReleaseDate>
              {' • ' + SongData.response.song.release_date}
            </S.SongReleaseDate>
          </S.SongDescBottom>
        </S.SongDesc>
        {/* <div>{SongData.response.song.embed_content}</div> */}
        {/* <Script
          src="//genius.com/songs/5971095/embed.js"
          strategy="lazyOnload"
          onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
          }
          
        /> */}
      </S.SongHeader>
      <S.YouTubePlayerWrapper>
        {videoId ? (
          <YouTube
            videoId={videoId}
            // className="player"
            opts={{
              width: '1700',
              height: '635',
              playerVars: {
                autoplay: 1,
                rel: 0,
                modestbranding: 1,
              },
            }}
            onEnd={(e) => {
              e.target.stopVideo(0);
            }}
          />
        ) : (
          <p>동영상이 없습니다.</p>
        )}
      </S.YouTubePlayerWrapper>
    </>
  );
}
