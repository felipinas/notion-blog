import { useEffect, useState } from 'react';
import axios from 'axios';

import {
  Container,
  Content,
  MyPhoto,
  Infos,
  Name,
  Links,
  StyledLink,
  Description,
} from './styles';

import { UserDataI } from './types';

export function AboutMe() {
  const [userData, setUserData] = useState<UserDataI | undefined>(undefined);
  const [feedbackMessage, setFeedbackMessage] = useState<string>('Loading...');

  const getUserData = async () => {
    try {
      const { data: response } = await axios.get(
        'https://api.github.com/users/felipinas'
      );

      const { avatar_url: avatarUrl, name, bio } = response;

      const formattedUserData = {
        image: avatarUrl,
        name,
        description: bio,
      };

      setUserData(formattedUserData);
    } catch (error) {
      setFeedbackMessage('Erro :(');
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  if (!userData) {
    return (
      <Container>
        <h1>{feedbackMessage}</h1>
      </Container>
    );
  }

  const { image, name, description } = userData;

  return (
    <Container>
      <Content>
        <MyPhoto src={image} alt="My photo" />

        <Infos>
          <div>
            <Name>{name}</Name>

            <Description>{description}</Description>
          </div>

          <Links>
            <StyledLink
              target="_blank"
              to="https://www.linkedin.com/in/joaofelipess/"
            >
              linkedin
            </StyledLink>

            <StyledLink target="_blank" to="https://github.com/felipinas">
              github
            </StyledLink>
          </Links>
        </Infos>
      </Content>
    </Container>
  );
}
