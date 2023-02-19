import styled from 'styled-components';
import { Link } from 'react-router-dom';

import notionLogoImg from './assets/notion-logo.svg';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: calc(100vh - 90px);
`;

export const Content = styled.div`
  width: 80vw;
  max-width: 683px;
`;

export const NotionLogo = styled.img.attrs({
  src: notionLogoImg,
})``;

export const Title = styled.h1`
  margin: 40px 0 18px 0;

  font-size: 64px;
  color: ${({ theme }) => theme['gray-900']};
`;

export const Description = styled.p`
  margin-bottom: 40px;

  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme['gray-800']};
`;

export const CheckCodeLink = styled(Link)`
  padding: 12px 24px;

  border: none;
  border-radius: 5px;

  text-decoration: none;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme['gray-900']};

  transition: 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;
