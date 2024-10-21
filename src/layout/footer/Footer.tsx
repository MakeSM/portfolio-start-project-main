import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../components/FlexWrapper';
import { Menu, MenuItem } from '../../components/menu/Menu';
import { Logo } from '../../components/logo/Logo';

const itemsIcon: MenuItem[] = [
   {
      typeItem: 'icon',
      label: 'githubIcon',
      href: '',
      viewBox: '0 0 30 30',
   },
   {
      typeItem: 'icon',
      label: 'telegramIcon',
      href: '',
      viewBox: '0 0 30 30',
   },
   {
      typeItem: 'icon',
      label: 'linkedinIcon',
      href: '',
      viewBox: '0 0 30 30',
   },
];

const itemsLink: MenuItem[] = [
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
];

export const Footer = () => {
   return (
      <StyledFooter>
         <FlexWrapper justify="space-around">
            <Logo typeLogo={'logoFooterIcon'} />
            {/* <span>+7 922 232 15 73</span> */}
            <Menu menuItems={itemsIcon} />
         </FlexWrapper>
         <FlexWrapper justify='space-around'>
            <Menu menuItems={itemsLink}/>
            <StyledText>Drinking coffee and developing a website</StyledText>
         </FlexWrapper>
      </StyledFooter>
   );
};

const StyledFooter = styled.footer`
   background-color: #191919;
   min-height: 30vh;
   display: flex;
   flex-direction: column;
`;

const StyledText = styled.span`
   font-weight: 400;
   font-size: 18px;
   line-height: 144%;
   text-align: center;
   color: #a7a7a7;
`;
