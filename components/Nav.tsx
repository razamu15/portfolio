import { useRouter } from 'next/router';
import React from 'react';
import Grid from './Grid';
import Container from './Container';
import styled from 'styled-components';
import Menu from '@icons/Menu';
import Close from '@icons/Close';

const LinkBtn = styled.a`
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  border-bottom: none;
  margin: 0;
  padding: 0;
  z-index: 1;
  font-weight: 500;
  transition: opacity 0.3s ease 0s;

  &:hover {
    opacity: 0.5;
  }
`;

export interface LinkProps {
  href: string;
  text: string;
  isActive: boolean;
}

const NavLink = ({ href, text, isActive }: LinkProps): JSX.Element => {
  return (
    <div
      style={{
        display: 'flex',
        background: isActive ? 'white' : 'transparent',
        borderRadius: '25px',
        padding: '.75rem ',
        margin: '0.25rem',
      }}
    >
      <LinkBtn href={href}>{text}</LinkBtn>
    </div>
  );
};

const MenuContainer = styled(Container)`
  cursor: pointer;
`;

export interface NavProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export interface BtnProps {
  path: string;
}

const Links = (props: BtnProps): JSX.Element => (
  <>
    <NavLink
      href="/"
      text="Home"
      isActive={props.path === '/' ? true : false}
    />
    <NavLink
      href="/about"
      text="About"
      isActive={props.path === '/about' ? true : false}
    />
    <NavLink
      href="/experiences"
      text="Experience"
      isActive={props.path.startsWith('/experiences') ? true : false}
    />
    <NavLink
      href="/projects"
      text="Projects"
      isActive={props.path.startsWith('/projects') ? true : false}
    />
    <NavLink
      href="/extras"
      text="Extras"
      isActive={props.path === '/extras' ? true : false}
    />
  </>
);

const Nav = ({ isOpen, onOpen, onClose }: NavProps): JSX.Element => {
  const router = useRouter();

  return (
    <Grid
      as="nav"
      px={['2rem', '2rem', '2rem', '0']}
      gridTemplateColumns={['1fr', '1fr', '1fr 1fr 1fr']}
      alignContent="center"
      justifyContent={['center', 'center', 'space-between']}
      margin="2rem 0"
    >
      <Container display={['none', 'none', 'flex']}>
        <NavLink href="/" text="Muhammad Raza" isActive={false} />
      </Container>
      <MenuContainer display={['flex', 'none', 'none']}>
        {isOpen ? (
          <Close
            size="2rem"
            style={{ margin: '-0.3rem' }}
            onClick={(evt) => evt.type === 'click' && onClose()}
          />
        ) : (
          <Menu
            size="1.6rem"
            onClick={(evt) => evt.type === 'click' && onOpen()}
          />
        )}
      </MenuContainer>
      {isOpen && (
        <Grid gridTemplateColumns="1fr" style={{ fontSize: '2rem' }} py="3rem">
          <Links path={router.asPath} />
        </Grid>
      )}
      <Container alignContent="center" display={['none', 'flex', 'flex']}>
        <Grid
          width="fit-content"
          gridGap=".75rem"
          alignItems="center"
          justifyItems="center"
          gridTemplateColumns="repeat(5, auto)"
          style={{
            borderRadius: '25px',
            background: 'rgba(0, 0, 0, 0.04)',
            // padding: '15px',
            position: 'relative',
          }}
        >
          <Links path={router.asPath} />
        </Grid>
      </Container>
      <Container alignContent="flex-end" display={['none', 'none', 'flex']}>
        <NavLink
          href="mailto:hello@shellbear.me"
          text="Contact"
          isActive={false}
        />
      </Container>
    </Grid>
  );
};

export default Nav;
