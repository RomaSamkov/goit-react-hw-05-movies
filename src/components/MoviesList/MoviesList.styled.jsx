import styled from 'styled-components';

export const FilmsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 150px;
  align-items: center;
  justify-content: center;
`;

export const Film = styled.li`
`;

export const FilmTitle = styled.p`
  display: inline;
  width: 200px;
  padding-top: 5px;
  font-size: 14px;
  font-weight: 700;
  color: black;
`;

export const ImgMovieList = styled.img`
  border-radius: 10px;
`;
