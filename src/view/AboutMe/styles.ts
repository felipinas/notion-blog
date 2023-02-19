import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: calc(100vh - 90px);
`;

export const Content = styled.div`
  display: flex;
  gap: 70px;

  width: 80vw;
  max-width: 683px;

  @media (max-width: 670px) {
    flex-direction: column;
    gap: 35px;
  }
`;

export const MyPhoto = styled.img`
  width: 200px;

  border-radius: 5px;
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 670px) {
    gap: 35px;
  }
`;

export const Name = styled.h1`
  margin-bottom: 12px;

  font-size: 48px;
  color: ${({ theme }) => theme['gray-900']};
`;

export const Description = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme['gray-800']};
`;

export const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
`;

export const StyledLink = styled(Link)`
  font-size: 20px;
  color: ${({ theme }) => theme.blue};

  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
