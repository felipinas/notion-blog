import { HeaderContainer, OptionsList, StyledNavLink } from './styles';

export function Header() {
  const options = [
    { name: 'home', path: '/' },
    { name: 'blog', path: '/blog' },
    { name: 'about me', path: '/about-me' },
  ];

  return (
    <HeaderContainer>
      <nav>
        <OptionsList>
          {options.map(({ name, path }) => {
            return (
              <li key={name}>
                <StyledNavLink to={path}>{name}</StyledNavLink>
              </li>
            );
          })}
        </OptionsList>
      </nav>
    </HeaderContainer>
  );
}
