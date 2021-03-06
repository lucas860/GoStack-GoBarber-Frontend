import React from 'react';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';

import { Container, Content, Profile } from './styles';

import logo from '~/assets/header-logo.svg';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">dashboard</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>Lucas Fernandes</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/uya.png"
              alt="Lucas Fernandes"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
