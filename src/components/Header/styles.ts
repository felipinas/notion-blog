import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 90px;
`;

export const OptionsList = styled.ul`
  display: flex;
  gap: 70px;

  list-style: none;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme['gray-900']};

  &.active {
    font-weight: 600;
  }
`;
