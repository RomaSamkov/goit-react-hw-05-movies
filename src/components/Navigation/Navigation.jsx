import { NavLink } from 'react-router-dom';

// const linkStyle = {
//   base: { color: 'green' },
//   active: { color: 'rgb(0, 0, 238)' },
// };

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Movies">Movies</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
