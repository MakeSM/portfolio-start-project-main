import React from 'react';
import styled from 'styled-components';
import { Menu, MenuItem } from '../../components/menu/Menu';
import { Logo } from '../../components/logo/Logo';

// const item = ['Home', 'TechStack']

const items:MenuItem[] = [
   {
      typeItem: 'link',
      label: 'Home',
      href: '',
   },
   {
      typeItem: 'link',
      label: 'Tech Stack',
      href: '',
   },
   {
      typeItem: 'link',
      label: 'Projects',
      href: '',
   },
   {
      typeItem: 'link',
      label: 'Contact',
      href: '',
   },
   {
      typeItem: 'icon',
      label: 'githubIcon',
      href: '',
		viewBox:'0 0 30 30',
   },
   {
      typeItem: 'icon',
      label: 'telegramIcon',
      href: '',
		viewBox:'0 0 30 30',
   },
   {
      typeItem: 'icon',
      label: 'linkedinIcon',
      href: '',
		viewBox:'0 0 30 30',
   },
];

export const Header = () => {
   return (
      <StyledHeader>
         <Logo typeLogo={'logoHeaderIcon'} />
         <Menu menuItems={items}/>
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

