import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-size: 24px;
  font-weight: 700;
  margin-right: 15px;
  color: black;
  &.active {
    color: brown;
    text-decoration: underline;
  }
  &:hover:not(.active) {
    color: #5c0080;
  }
`;

export const Container = styled.ul`
  display: flex;
  padding-left: 125px;
`;

export const Nav = styled.nav`
  padding: 20px 30px;
  -webkit-box-shadow: -2px -1px 15px 7px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: -3px -2px 30px 14px rgba(0, 0, 0, 0.425);
  box-shadow: -4px -3px 45px 21px rgba(0, 0, 0, 0.35);
`;
