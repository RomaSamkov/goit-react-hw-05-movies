import { Container, Nav, StyledLink } from './Navigation.styled';

const Navigation = () => {
  return (
    <Nav>
      <Container>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/Movies">Movies</StyledLink>
        </li>
      </Container>
    </Nav>
  );
};

export default Navigation;
