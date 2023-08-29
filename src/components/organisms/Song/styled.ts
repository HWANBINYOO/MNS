import styled from '@emotion/styled';

export const SongHeader = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  align-items: flex-end;
  /* background-image: url('https://images.genius.com/b381acc7bd99c3b21827359383b12e61.300x300x1.jpg'); */
  /* background-size: cover;; */
  background-color: #c9d6df;
  gap: 20px;
`;

export const SongImg = styled.div``;

export const SongName = styled.div`
  font-size: 25px;
  font-weight: bold;
`;

export const SongDesc = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SongArtist = styled.div`
  text-decoration: underline;
  cursor: pointer;
  font-size: 15px;
`;

export const SongDescBottom = styled.div`
  display: flex;
`;

export const SongReleaseDate = styled.div`
  font-size: 15px;
`;

export const YouTubePlayerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  /* .player {
    width: 100vw;
  } */
`;
