import styled from '@emotion/styled';

export const SearchItem = styled.div`
  width: 230px;
  height: 270px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
  background-color: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 10px;
  cursor: pointer;
  img {
    border-radius: 50%;
  }
`;

export const SearchItemName = styled.div`
  width: 140px;
  font-size: 20px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
