import React from 'react';
import styled from 'styled-components';
import { Menu } from '../../components/menu/Menu';
import { Logo } from '../../components/logo/Logo';

const items = [
   {
      type: 'link',
      label: 'Home',
      href: '',
   },
   {
      type: 'link',
      label: 'Tech Stack',
      href: '',
   },
   {
      type: 'link',
      label: 'Projects',
      href: '',
   },
   {
      type: 'link',
      label: 'Contact',
      href: '',
   },
   {
      type: 'icon',
      label: 'githubIcon',
      href: '',
   },
   {
      type: 'icon',
      label: 'telegramIcon',
      href: '',
   },
   {
      type: 'icon',
      label: 'linkedinIcon',
      href: '',
   },
];

export const Header = () => {
   return (
      <StyledHeader>
         <Logo />
         {/* <Menu menuItems={items}/> */}
         <Menu />
      </StyledHeader>
   );
};

const StyledHeader = styled.header`
   background-color: #191919;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 306px;
`;
// 'Home', 'Tech Stack', 'Projects', 'Contact', '', '', '',
