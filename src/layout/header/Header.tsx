import React from 'react';
import styled from 'styled-components';
import { Menu, MenuItemPropsType } from '../../components/menu/Menu';
import { Logo } from '../../components/logo/Logo';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import { theme } from '../../assets/globalStyles/Theme';

const items: MenuItemPropsType[] = [
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

// const itemsIcon: MenuItemPropsType[] = [
//    {
//       typeItem: 'icon',
//       label: 'githubIcon',
//       href: '',
//       viewBox: '0 0 30 30',
//    },
//    {
//       typeItem: 'icon',
//       label: 'telegramIcon',
//       href: '',
//       viewBox: '0 0 30 30',
//    },
//    {
//       typeItem: 'icon',
//       label: 'linkedinIcon',
//       href: '',
//       viewBox: '0 0 30 30',
//    },
// ];

export const Header = () => {
   return (
      <StyledHeader>
         <Container>
            <FlexWrapper justify="space-between" align="center">
               <Logo typeLogo={'logoHeaderIcon'} />
               <Menu menuItems={items} />
               {/* <Menu menuItems={itemsIcon} /> */}
            </FlexWrapper>
         </Container>
      </StyledHeader>
   );
};

const StyledHeader = styled.header`
   background-color: ${theme.colors.primaryBg};
`;
