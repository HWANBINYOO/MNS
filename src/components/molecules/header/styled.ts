import styled from '@emotion/styled';

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
  display: flex;
  align-content: center;
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
