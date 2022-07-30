import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 1400px;
  margin: 0px auto;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const FilmInfo = styled.div`
  padding: 20px;
  margin-left: 100px;
  margin-right: 150px;
  padding-right: 50px;
  background-color: rgba(0, 0, 0, 0.3);
  height: 410px;
  border-radius: 10px;
`;

export const MovieImg = styled.img`
  margin-left: 50px;
  border-radius: 10px;
`;

export const AdditionalInformation = styled.div`
  margin-left: 50px;
  margin-bottom: 50px;
  padding: 20px;
  margin-right: 100px;
  height: 80px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-size: 24px;
  font-weight: 700;
  margin-right: 121px;
  color: #5c0080;
  &.active {
    color: brown;
    text-decoration: underline;
  }
  &:hover:not(.active) {
    color: rgb(181, 198, 236);
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

export const ButtonGoBack = styled.button`
  display: inline-block;
  margin-left: 50px;
  margin-top: 10px;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;

  &:hover {
    background-color: #b5bbc0;
    border-color: #b5bbc0;
    color: black;
  }
`;
