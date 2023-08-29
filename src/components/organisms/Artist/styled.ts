import styled from '@emotion/styled';

export const SongHeader = styled.div`
  display: flex;
  width: 100vw;
  height: 290px;
  padding: 20px;
  align-items: flex-end;
  gap: 20px;
  background-size: cover;
  filter: blur(4px);
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  position: relative;
`;

export const SongName = styled.div`
  font-size: 25px;
  font-weight: bold;
  padding: 0 0 20px 20px;
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

export const ArtistBox = styled.div`
  position: absolute;
  width: 380px;
  border-radius: 15px;
  height: 440px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  top: 20%;
  left: 38%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  img {
    border-radius: 15px;
  }
`;

export const SubsrtiptBtn = styled.button`
  width: 160px;
  height: 40px;
  border-radius: 10px;
  font-size: 15px;
  color: white;
  border: none;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  background-color: #d44339;
  transition: 0.2s ease-in;

  :hover {
    background-color: #b42322;
  }
`;
