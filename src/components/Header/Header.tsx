import { HeaderContainer, OptionsList, StyledNavLink } from './styles';

export const urlOptions = [
  { name: 'home', path: '/' },
  { name: 'blog', path: '/blog' },
  { name: 'about me', path: '/about-me' },
];

export function Header() {
  return (
    <HeaderContainer>
      <nav>
        <OptionsList>
          {urlOptions.map(({ name, path }) => {
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
