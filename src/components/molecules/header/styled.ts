import styled from '@emotion/styled';
import { isFocusProps } from 'src/types/songs';

export const Header = styled.div`
  width: 100vw;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1e2022;
  color: white;
  padding: 0 20px;
`;

export const MainLogo = styled.div`
  font-size: 40px;
  font-weight: bold;
`;

export const SearchBar = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const BillboardNavigation = styled.nav`
  display: flex;
  align-content: center;
  gap: 10px;
  a::before {
    content: '|';
    color: #52616b;
    padding-right: 10px;
  }
`;

export const BillboardNavLi = styled.a`
  color: white;
  text-decoration: none;
  :hover {
    transition: 0.2s ease-in;
    color: #52616b;
  }
`;

export const SearchForm = styled.form`
  /* width: ${(props: isFocusProps) => (props.isFocus ? '550px' : '250px')}; */
  width: 380px;
  height: 60%;
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  gap: 15px;
  padding: 0 10px;
  transition: 0.3s all ease-in;
  input {
    outline: none;
    border: none;
    font-size: 16px;
  }
  svg {
    width: 25px;
  }
`;
